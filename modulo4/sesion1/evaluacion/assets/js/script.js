let inputs = document.getElementsByClassName("inputValido");
let formSubmit = document.getElementById("miForm");
let arrayObjetos = [];

function creaInput(input, valor){
    let obj = {};
    obj[input] = valor
    return obj
}

formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    for(let input of inputs){
        let objetoInput = new creaInput(input.id,input.value)
        arrayObjetos.push(objetoInput)
    }

    alert(`
    DE: ${arrayObjetos[0].nombre} ${arrayObjetos[1].apellido} (${arrayObjetos[2].correo})    
    -ASUNTO: ${arrayObjetos[3].motivo}
    -MENSAJE: ${arrayObjetos[4].mensaje}
    `) 
})