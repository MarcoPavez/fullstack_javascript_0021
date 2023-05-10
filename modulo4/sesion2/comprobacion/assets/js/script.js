/* Funcionalidad botones signup y vip */
let btnSignup = document.getElementById("btn-signup")
let btnVip = document.getElementById("btn-vip")

let sectionRegular = document.getElementById("section-regular")
let sectionVIp = document.getElementById("section-vip")

sectionVIp.style.display = "none";

btnVip.addEventListener("click", () => {
    sectionVIp.style.display = "block";
    sectionRegular.style.display = "none";
})

btnSignup.addEventListener("click", () => {
    sectionVIp.style.display = "none";
    sectionRegular.style.display = "block";
})

/* Creacion de clases */
class Usuario {
    constructor(correo, contrasena) {
        this.correo = correo,
            this.contrasena = contrasena
    }

    get retornarInputs() {
        return alert(`
        Bienvenido Usuario527
        Correo: ${this.correo} Contraseña: ${this.contrasena}
        `)
    }
}

class UsuarioVIP extends Usuario {
    constructor(nombre, correo, contrasena) {
        super(correo, contrasena)
        this.nombre = nombre
    }

    get retornarInputsVip() {
        return alert(`
        Bienvenido ${this.nombre}
        Usuario:${this.nombre} Correo: ${this.correo} Contraseña: ${this.contrasena}
        `)
    }
}

/* Obtener botones submit desde DOM */
let btnSubmitRegular = document.getElementById("btn-submit-regular")
let btnSubmitVip = document.getElementById("btn-submit-vip")

/* Obtener valores input desde DOM */
let correoRegular = document.getElementById("correo")
let contrasenaRegular = document.getElementById("contrasena")

let nombre = document.getElementById("nombreVIP")
let correoVip = document.getElementById("correoVIP")
let contrasenaVip = document.getElementById("contrasenaVIP")

/* Se agrega eventos a botones */
btnSubmitRegular.addEventListener("click", () => {
    
    let usuarioRegular = new Usuario(correoRegular.value, contrasenaRegular.value)
    usuarioRegular.retornarInputs
})

btnSubmitVip.addEventListener("click", () => {
    
    let usuarioVip = new UsuarioVIP(nombre.value,correoRegular.value, contrasenaRegular.value)
    usuarioVip.retornarInputsVip
})
