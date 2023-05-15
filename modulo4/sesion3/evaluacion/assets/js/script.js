let inputs = document.getElementsByTagName("input")

class ObtenerValores {
    constructor(nombre, valor) {
        this.nombre = nombre;
        this.valor = valor;
    }
}

let arrayInput = [];

let boton = document.getElementById("submit")

boton.addEventListener("click", () => {

    for (let input of inputs) {
        let objetoInput = new ObtenerValores(input.name, input.value);
        arrayInput.push(objetoInput)
    }

    console.log(`PARA: ${arrayInput[0].valor}
TITULO: ${arrayInput[1].valor}
MENSAJE: ${arrayInput[2].valor}
DE: ${arrayInput[3].valor}`)

    for (let input of inputs) {

        if (input.name == "copia") {
            console.log(`CC:${input.value}`)
        } 
    }
})