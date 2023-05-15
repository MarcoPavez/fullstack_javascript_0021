import { quitarPrincipales, traerPrincipales } from "./recuperarPersonajes.js";

let personajesPrincipales = []
let personajesSecundarios = []
let personajesRelevantes = []

/* Acceso a elementos del DOM */
let principales = document.getElementById("unoCinco")
let secundarios = document.getElementById("seisOnce")
let relevantes = document.getElementById("doceDiez")

let articulosPrincipales = document.getElementById("principales")
let articulosSecundarios = document.getElementById("secundarios")
let articulosRelevantes = document.getElementById("relevantes")

const fetchData = async () => {
  for (let i = 1; i <= 17; i++) {
    const url = `https://swapi.dev/api/people/${i}/`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (i < 6) {
        personajesPrincipales.push(data);
      } else if (i > 5 && i < 12) {
        personajesSecundarios.push(data);
      } else {
        personajesRelevantes.push(data);
      }
    } catch (error) {
      console.log(`Query ${i} failed:`, error);
    }
  }
}

fetchData();

const agregarEvento = async(element, arrayPersonajes, node) => {
  
  element.addEventListener("mouseenter", () => {
    traerPrincipales(arrayPersonajes, node)
  })
  element.addEventListener("mouseleave", () => {
    quitarPrincipales()
  })
}

agregarEvento(principales, personajesPrincipales, articulosPrincipales);
agregarEvento(secundarios, personajesSecundarios, articulosSecundarios);
agregarEvento(relevantes, personajesRelevantes, articulosRelevantes);