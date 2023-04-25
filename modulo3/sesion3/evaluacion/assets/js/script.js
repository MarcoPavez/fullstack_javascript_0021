const botonCheckbox = document.getElementById("botonCheckbox")
const codigoDescuento = document.getElementById("clickDescuento")
botonCheckbox.checked = false;

codigoDescuento.addEventListener("click", () => {
    if(!botonCheckbox.checked){
        alert("Para obtener un código de descuento, debes aceptar los términos y condiciones")
    }else if (botonCheckbox.checked){
        document.getElementById("codigoDescuentoFinal").style.display = "block"
    }
})