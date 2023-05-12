/* Acceso a DOM */
const checkbox = document.getElementsByTagName("input")
const item = document.getElementById("item")
const total = document.getElementById("total")

const itemExtra = document.getElementById("item-extra")
const itemExtraPrecio = document.getElementById("item-extra-precio")

let arraySelecciones = [];
let nombreItemSeleccionado
let precioItemSeleccionado
let precioExtras = 0;

class Selecciones {
    constructor(nombre, precio = 0) {
        this._nombre = nombre;
        this._precio = precio;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nombre) {
        this._nombre = nombre;
    }

    get precio() {
        return this._precio;
    }

    set precio(precio) {
        this._precio = precio;
    }
}

function actualizarPresupuesto(arr) {
    let montoActualizado = arr.reduce(
        (curr, acc) => curr + parseInt(acc.precio), 15000
    )
    return total.innerText = montoActualizado;
}

function agregarItems(obj, array) {
    nombreItemSeleccionado = document.createElement("p");
    nombreItemSeleccionado.innerText = obj.nombre;

    precioExtras += obj.precio
    itemExtraPrecio.innerText = precioExtras;

    if (array.length > 3) {
        itemExtra.appendChild(nombreItemSeleccionado)
    } else {
        item.appendChild(nombreItemSeleccionado);
    }
}

function quitarElemento(arr) {
    arr.pop();
    if (arr.length >= 3) {
        const pItems = itemExtra.getElementsByTagName("p");
        pItems[pItems.length - 1].remove();

        precioExtras -= 800;
        itemExtraPrecio.innerText = precioExtras;
    } else {
        const pItems = item.getElementsByTagName("p");
        pItems[pItems.length - 1].remove();
    }
    return actualizarPresupuesto(arr);
}

for (let i = 0; i < checkbox.length; i++) {

    /* Checkbox sin marcar al recargar la página */
    checkbox[i].checked = false;
    /* Se agrega evento que retorna el valor asociado a cada checkbox */
    checkbox[i].addEventListener("click", () => {

        if (!checkbox[i].checked) {
            quitarElemento(arraySelecciones)
        } else {
            /* Se agrega todo item seleccionado a un array de objetos para posterior cálculo de valor total */
            if (arraySelecciones.length > 2) {
                let seleccion = new Selecciones(checkbox[i].name, 800);
                arraySelecciones.push(seleccion);
                agregarItems(seleccion, arraySelecciones);
                actualizarPresupuesto(arraySelecciones)
            } else {
                let seleccion = new Selecciones(checkbox[i].name);
                arraySelecciones.push(seleccion);
                agregarItems(seleccion, arraySelecciones);
                actualizarPresupuesto(arraySelecciones);
            }
        }
    }
    )
}

