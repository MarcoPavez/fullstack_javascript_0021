let formulario = document.getElementById("miForm");

let manejador = {
    set: function (objeto, propiedad, valor) {

        if (propiedad == "edad") {
            if (typeof valor !== "number" || Number.isNaN(valor)) {
                alert("La edad debe ser un número")
                return false;
            } else if (valor < 0) {
                alert("La edad debe ser un número positivo")
                return false;
            } else if (valor < 18 && valor >= 0) {
                alert("Debes ser mayor de edad")
                return false;
            }
        }
        objeto[propiedad] = valor;
        return true;
    }
}

const objetoForm = {
    nombre: "",
    edad: "",
    email: ""
};

const formularioProxy = new Proxy(objetoForm, manejador);

formulario.addEventListener('submit', (event) => {
    event.preventDefault();

    formularioProxy.nombre = formulario.nombre.value;
    formularioProxy.edad = parseInt(formulario.edad.value);
    formularioProxy.email = formulario.email.value;

    /* Resetea valores del input */
    formulario.nombre.value= "";
    formulario.edad.value= "";
    formulario.email.value= "";

    console.log(formularioProxy.nombre);
    console.log(formularioProxy.edad);
    console.log(formularioProxy.email);
});