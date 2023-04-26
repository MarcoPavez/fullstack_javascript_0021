/* ------ EVENTO CIUDAD ORIGEN Y DESTINO */

/* Captura divs para appendChild() de ciudad y fecha */
const divOrigen = document.getElementById("resultadoOrigen");
const divDestino = document.getElementById("resultadoDestino");
const itinerario = document.getElementById("itinerario");

/* Para adjuntar elementos tras un evento, es necesario crearlos previamente */
let parrafoCiudadOrigen = document.createElement("p");
let tituloCiudadOrigen = document.createElement("h3");
let botonOrigen = document.createElement("button");

let parrafoCiudadDestino = document.createElement("p");
let tituloCiudadDestino = document.createElement("h3");
let botonDestino = document.createElement("button");

/* Se agrega texto a botones */

botonOrigen.innerText = "Mostrar más información";
botonDestino.innerText = "Mostrar más información";

/* Ejecuta appendChild() en divs */
divOrigen.appendChild(parrafoCiudadOrigen);
divOrigen.appendChild(tituloCiudadOrigen);

divDestino.appendChild(parrafoCiudadDestino);
divDestino.appendChild(tituloCiudadDestino);

/* Creación de alerta por escala */

let alertaEscala = document.createElement("h4");
alertaEscala.innerText = "¡Ojo! Tu vuelo tiene una escala";

/* Eventos */

const ciudadOrigen = document.getElementById("origen");
ciudadOrigen.addEventListener("change", () => {
  removeVuelosEscalas();

  tituloCiudadOrigen.innerText = ciudadOrigen.value;
  divOrigen.appendChild(botonOrigen);

  vuelosEscalas();
});

const ciudadDestino = document.getElementById("destino");
ciudadDestino.addEventListener("change", () => {
  removeVuelosEscalas();

  tituloCiudadDestino.innerText = ciudadDestino.value;
  divDestino.appendChild(botonDestino);

  vuelosEscalas();
});

/* EVENTO FECHA */
const inputFechaOrigen = document.getElementById("fechaOrigen");
inputFechaOrigen.addEventListener("change", () => {
  parrafoCiudadOrigen.innerText = inputFechaOrigen.value;
});

const inputFechaDestino = document.getElementById("fechaDestino");
inputFechaDestino.addEventListener("change", () => {
  parrafoCiudadDestino.innerText = inputFechaDestino.value;
});

/* Declaracion funciones */

function removeVuelosEscalas() {
  if (itinerario.contains(alertaEscala)) {
    itinerario.removeChild(alertaEscala);
  }
}

function vuelosEscalas() {
  if ( ciudadOrigen.value === "Chicago" && ciudadDestino.value === "Venecia" ) {
    itinerario.appendChild(alertaEscala);
  } else if ( ciudadOrigen.value === "Boston" && ciudadDestino.value === "Paris" ) {
    itinerario.appendChild(alertaEscala);
  }
}