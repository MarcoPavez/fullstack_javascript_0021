let marcaComputador = document.getElementById("marca");
let precioComputador = document.getElementById("precio");
let imagenComputador = document.getElementById("imagen");
let btnAlternativa = document.getElementById("btn-alternativa");

function Computador(marca, modelo, precio, imagen) {
    this.marca = marca,
        this.modelo = modelo,
        this.precio = precio,
        this.imagen = imagen
};

function reemplazarObjeto(obj) {
    marcaComputador.innerText = obj.marca;
    precioComputador.innerText = obj.precio;
    imagenComputador.setAttribute("src", obj.imagen);
};

let primerClick = false;

btnAlternativa.addEventListener("click", () => {
    if (!primerClick) {
        let computador = new Computador("Dell Xtreme 270", "Lenovo", "$3,990", "./assets/img/notebook1.jpg");
        reemplazarObjeto(computador);
        primerClick = true;
    } else {
        let computador = new Computador("Apple Mackbook Air", "Apple", "$990", "./assets/img/notebook2.jpg");
        reemplazarObjeto(computador)
    }
});