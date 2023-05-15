class CrearContacto {
    constructor(nombre,apellido,telefono,correo,nota){
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.correo = correo;
        this.nota = nota;
    }
}

let inputs = document.getElementsByTagName("input")

let valorInput = []


let form = document.getElementById("form")

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    for(let input of inputs){
        valorInput.push(input.value);
    }

    let nuevoContacto = new CrearContacto(...valorInput)

    const {nombre, apellido} = nuevoContacto;
    const nombreApellido = `${nombre} ${apellido}`

    const {telefono,correo,nota} = nuevoContacto

    const contactoGuardado = document.createElement("div")
    contactoGuardado.setAttribute("id","contactoGuardado")
    contactoGuardado.innerHTML = 
    `
    <h4>Contacto Guardado</h4>
    <p>Nombre: ${nombreApellido} Email: ${correo} Teléfono: ${telefono}</p>
    <button>Llamar</button>
    <button>Enviar mensaje</button>
    `
   let main = document.getElementById("main")
   main.appendChild(contactoGuardado)
})
   