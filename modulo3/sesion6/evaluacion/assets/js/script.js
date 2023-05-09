let botonAgregar = document.getElementById("agregar");
let inputAgregar = document.getElementById("inputAgregar");

let botonEliminar = document.getElementById("eliminar");
let inputEliminar = document.getElementById("inputEliminar");

let equipos = document.getElementById("equipos");

let integrantes = [];

botonAgregar.addEventListener("click", () => {
    let integrante = inputAgregar.value;
    integrantes.push(integrante);
    equipos.innerText += integrante + ";";
    /* Resetea valor del input */
    inputAgregar.value = "";
})



botonEliminar.addEventListener("click", () => {
    let eliminarIntegrante = inputEliminar.value;
    
    integrantes.forEach(integrante => {
        if(integrante == eliminarIntegrante){
            integrantes = integrantes.filter(user => !user.includes(eliminarIntegrante));
            equipos.innerText = equipos.innerText.split(";").filter(user => !user.includes(eliminarIntegrante)) //.replace(`${eliminarIntegrante}`,"")
        }
    })
    inputEliminar.value = ""
})