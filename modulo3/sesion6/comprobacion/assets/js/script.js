let checkbox = document.getElementsByTagName("input")
let item = document.getElementById("item")
let itemPrecio = document.getElementById("item-precio")
let total = document.getElementById("total")

function Selecciones(nombre, precio) {
  this.nombre = nombre,
    this.precio = precio
}

let arraySelecciones = [];


for (let i = 0; i < checkbox.length; i++) {
  /* Checkbox sin marcar por default */
  checkbox[i].checked = false;
  /* Se agrega evento que retorna el valor asociado a cada checkbox */
  checkbox[i].addEventListener("click", () => {

    /* Se agrega todo item seleccionado a un array de objetos para posterior cálculo de valor total */
    let seleccion = new Selecciones(checkbox[i].name, checkbox[i].value);
    arraySelecciones.push(seleccion);

    /* Se agrega individualmente cada item y su valor a lista de items seleccionados */
    let nombreItemSeleccionado = document.createElement("p");
    nombreItemSeleccionado.innerText = checkbox[i].name;

    let precioItemSeleccionado = document.createElement("p");
    precioItemSeleccionado.innerText = checkbox[i].value;

    item.appendChild(nombreItemSeleccionado);
    itemPrecio.appendChild(precioItemSeleccionado);

    /* Cálculo valor total */
    let valorTotal = 0;
    valorTotal = arraySelecciones.reduce(
      (curr, acc) => curr + parseInt(acc.precio), 0
    )
    total.innerText = valorTotal;
  })
}
