const vuelos = [
  { origen: "Madrid", destino: "Barcelona", salida: "08:00", llegada: "09:30" },
  { origen: "Sevilla", destino: "Valencia", salida: "10:00", llegada: "11:45" },
  { origen: "Bilbao", destino: "Madrid", salida: "12:00", llegada: "13:30" },
  {
    origen: "Barcelona",
    destino: "Sevilla",
    salida: "14:00",
    llegada: "15:45",
  },
  { origen: "Valencia", destino: "Bilbao", salida: "16:00", llegada: "17:30" },
  { origen: "Madrid", destino: "Valencia", salida: "18:00", llegada: "19:30" },
  { origen: "Sevilla", destino: "Madrid", salida: "20:00", llegada: "21:30" },
  { origen: "Bilbao", destino: "Barcelona", salida: "22:00", llegada: "23:30" },
  { origen: "Barcelona", destino: "Madrid", salida: "06:00", llegada: "07:30" },
  { origen: "Valencia", destino: "Sevilla", salida: "07:00", llegada: "08:45" },
];

function mostrarVuelos(vuelos) {
  vuelos.forEach((vuelo) => {
    console.log(
      `Origen: ${vuelo.origen}, Destino: ${vuelo.destino}, Salida: ${vuelo.salida}, Llegada: ${vuelo.llegada}`
    );
  });
}

function mostrarVuelosPorDestino(vuelos, destino) {
  const vuelosDestino = vuelos.filter((vuelo) => vuelo.destino === destino);
  mostrarVuelos(vuelosDestino);
}

function mostrarVuelosPorHoraLlegada(vuelos, hora) {
  const vuelosHora = vuelos.filter((vuelo) => vuelo.llegada > hora);
  mostrarVuelos(vuelosHora);
}

// Ejemplo de uso:
console.log("Todos los vuelos:");
mostrarVuelos(vuelos);

console.log("\nVuelos con destino a Madrid:");
mostrarVuelosPorDestino(vuelos, "Madrid");

console.log("\nVuelos que llegan después de las 15:00:");
mostrarVuelosPorHoraLlegada(vuelos, "15:00");
