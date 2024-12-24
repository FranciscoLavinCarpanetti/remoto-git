let v1 = 5;
let v2 = 10;
let v3 = 15;

// Todas las variables son cero
let todasSonCero = v1 === 0 && v2 === 0 && v3 === 0;

// Todas las variables son positivas
let todasSonPositivas = v1 > 0 && v2 > 0 && v3 > 0;

// Todas las variables tienen el mismo signo
let mismoSigno = (v1 > 0 && v2 > 0 && v3 > 0) || (v1 < 0 && v2 < 0 && v3 < 0);

// Todos sus valores son distintos
let todosDistintos = v1 !== v2 && v1 !== v3 && v2 !== v3;

// Dos de sus valores coinciden
let dosCoinciden = v1 === v2 || v1 === v3 || v2 === v3;

// Como máximo dos de sus valores coinciden
let maximoDosCoinciden =
  (v1 === v2 && v1 !== v3) ||
  (v1 === v3 && v1 !== v2) ||
  (v2 === v3 && v2 !== v1) ||
  (v1 !== v2 && v1 !== v3 && v2 !== v3);

// El valor de v2 está comprendido entre los de v1 y v3
let v2EntreV1yV3 = (v1 < v2 && v2 < v3) || (v3 < v2 && v2 < v1);

console.log("Todas las variables son cero:", todasSonCero);
console.log("Todas las variables son positivas:", todasSonPositivas);
console.log("Todas las variables tienen el mismo signo:", mismoSigno);
console.log("Todos sus valores son distintos:", todosDistintos);
console.log("Dos de sus valores coinciden:", dosCoinciden);
console.log("Como máximo dos de sus valores coinciden:", maximoDosCoinciden);
console.log(
  "El valor de v2 está comprendido entre los de v1 y v3:",
  v2EntreV1yV3
);
