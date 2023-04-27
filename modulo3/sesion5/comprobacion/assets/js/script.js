const inputCorreo = document.getElementById("correo")
const inputTelefono = document.getElementById("telefono")
const inputSobreTi = document.getElementById("sobreTi")
const inputSubmit = document.getElementById("botonSubmit")

let postCorreo = document.createElement("P");
let postTelefono = document.createElement("P");
let postSobreTi = document.createElement("P");

inputSubmit.addEventListener("click", (event) => {
    event.preventDefault();

    let valorCorreo = inputCorreo.value;
    let valorTelefono = inputTelefono.value;
    let valorSobreTi = inputSobreTi.value;

    function Usuario(correo,telefono,informacion){
        this.correo = correo;
        this.telefono = telefono;
        this.informacion = informacion;
    }

    const usuarioIngresado = new Usuario(valorCorreo,valorTelefono,valorSobreTi)


    postCorreo.innerText = usuarioIngresado.correo
    postTelefono.innerText = usuarioIngresado.telefono
    postSobreTi.innerText = usuarioIngresado.informacion


    document.getElementById("divCorreo").appendChild(postCorreo)
    document.getElementById("divTelefono").appendChild(postTelefono)
    document.getElementById("divSobreMi").appendChild(postSobreTi)
})