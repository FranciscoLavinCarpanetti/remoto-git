import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { mergeGeometries } from "three/addons/utils/BufferGeometryUtils.js";

console.clear();

class Landscape extends THREE.Mesh {
  constructor() {
    
    let g = mergeGeometries([
      new THREE.PlaneGeometry(1, 1, 250, 500),
      new THREE.PlaneGeometry(1, 1, 250, 500)
    ], true).rotateX(Math.PI * -0.5);
    
    let ms = Array.from({length: 2}, (_, idx) => {
      let m = new THREE.MeshBasicMaterial({
        color: idx < 0.5 ? 0x000000 : 0xffffff,
        side: idx < 0.5 ? THREE.FrontSide : THREE.BackSide,
        onBeforeCompile: shader => {
          shader.uniforms.time = gu.time;
          shader.uniforms.hasShift = {value: idx};
          shader.vertexShader = `
            uniform float hasShift;
            uniform float time;
            
            varying float river;
            varying float vHasShift;
            
            ${noise}
            ${shader.vertexShader}
          `.replace(
            `#include <begin_vertex>`,
            `#include <begin_vertex>
            
              vHasShift = hasShift;
              
              float t = time * PI;
              
              vec3 pos = vec3(modelMatrix * vec4(position, 1));
              
              float treeNoise = abs(snoise((pos.xz - vec2(0., t)) * 0.25));
              treeNoise = pow(treeNoise, 0.5);
              
              float riverNoise = snoise(vec2(0, pos.z - t) * 0.05);
              riverNoise = smoothstep(5., 7., abs(pos.x + riverNoise * 2.5));
              
              transformed.y += treeNoise * 2.5 * riverNoise;
              transformed.y += hasShift * 0.05;
              
              river = riverNoise;
            
            `
          );
          //console.log(shader.vertexShader);
          
          shader.fragmentShader = `
            varying float vHasShift;
            varying float river;
            
            ${shader.fragmentShader}
          `.replace(
            `#include <color_fragment>`,
            `#include <color_fragment>
            
            diffuseColor.rgb = vHasShift < 0.5 && river < 0.01 ? vec3(1) : diffuseColor.rgb;
            `
          );
          //console.log(shader.fragmentShader);
        }
      });
      return m;
    });
    
    super(g, ms);
    this.scale.set(50, 1, 50);
  }
}

class Sun extends THREE.Mesh{
  constructor(){
    let g = new THREE.PlaneGeometry(50, 50);
    let m = new THREE.MeshBasicMaterial({
      color: "red",
      onBeforeCompile: shader => {
        shader.uniforms.time = gu.time;
        shader.fragmentShader = `
          uniform float time;
          ${shader.fragmentShader}
        `.replace(
          `#include <color_fragment>`,
          `#include <color_fragment>
            
            vec2 lUv = (vUv - 0.5) * 2.;
            float val = 0.;
            float lenUv = length(lUv);
            float tShift = fract(time * 0.5);
            val = max(val, 1. - step(0.3, lenUv)); // central circle
            //val = max(val, step(0.35, lenUv) - step(0.4, lenUv)); // outer circle

            val = max(val, step(0.3 + (tShift * 0.7), lenUv) - step(0.35 + (tShift * 0.65), lenUv)); // ripple
            
            val = 1. - min(val, step(0.025, lUv.y));
            
            val = min(val, step(0.05, lUv.y));
            
            diffuseColor.rgb = vec3(val);
          
          `
        );
        console.log(shader.fragmentShader);
      }
    });
    m.defines = {"USE_UV": ""};
    super(g, m);
    this.position.z = -25;
  }
}

let gu = {
  time: {
    value: 0
  }
};
let dpr = Math.min(devicePixelRatio, 1);
let scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);
let camera = new THREE.PerspectiveCamera(
  35,
  innerWidth / innerHeight,
  0.1,
  1000
);
camera.position.set(0, 0.25, 1).setLength(30);
let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(devicePixelRatio);
renderer.setSize(innerWidth * dpr, innerHeight * dpr);
document.body.appendChild(renderer.domElement);

window.addEventListener("resize", (event) => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth * dpr, innerHeight * dpr);
});

let controls = new OrbitControls(camera, renderer.domElement);
controls.enabled = false;

let light = new THREE.DirectionalLight(0xffffff, Math.PI);
light.position.setScalar(1);
scene.add(light, new THREE.AmbientLight(0xffffff, Math.PI * 0.5));

let landscape = new Landscape();
scene.add(landscape);
let sun = new Sun();
scene.add(sun);

let clock = new THREE.Clock();
let t = 0;

renderer.setAnimationLoop(() => {
  let dt = clock.getDelta();
  t += dt;
  gu.time.value = t;
  controls.update();
  renderer.render(scene, camera);
});