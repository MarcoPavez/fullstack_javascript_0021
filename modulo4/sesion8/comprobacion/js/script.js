import { fetchMeteorologyData } from "./fetch.js";

/* Acceso al DOM */
const inputComuna = document.getElementById("comuna");
const btnBuscar = document.getElementById("btn-submit")
const main = document.getElementById("main")

/* Cada vez que se actualiza la pagina, el valor de la barra de búsqueda se resetea */
inputComuna.value = "";

/* Se hace el llamado a la API, su resultado se guarda en arrayAPI*/
const arrayAPI = await fetchMeteorologyData();

let agregado = document.createElement("section")

btnBuscar.addEventListener("click", async () => {
  const comuna = inputComuna.value.trim().replace(/(^|\s)\S/g, (match) => {
    return match.toUpperCase();
  });

  try {
    const resultados = arrayAPI;

    let encontron = resultados.find((elemento) => elemento.nombre === comuna);

    /* Se extrae valor de concentración del aire */
    let concentracionAire = encontron.realtime[0].info.rows[0].c[3].v
    let start = concentracionAire.indexOf('<strong>')
    let final = concentracionAire.indexOf("</strong>")
    let finalFinal = concentracionAire.substring(start, final)

    /* Se agrega el resultado de la query al DOM */
    agregado.innerHTML =
      `
      <h4>Resultado</h4>
      <p>Comuna: ${encontron.nombre}</p>
      <p>Región: ${encontron.region}</p>
      <p>La concentración de la contaminación en el aire es de ${finalFinal}</p>
      <p>La concentración del aire es ${encontron.realtime[0].tableRow.status}</p>
      `
    main.appendChild(agregado)

  } catch (error) {
    console.error(error);
  }
});

/* Funcionalidad: se resetea barra de busqueda y resultado de query al hacer click en barra de búsqueda (luego de existir una query) */
inputComuna.addEventListener("click", () => {
  inputComuna.value = "";
  agregado.innerHTML = "";
  main.appendChild(agregado)
})