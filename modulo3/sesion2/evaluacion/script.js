function celcius_a_farenheit() {

    /* Extrae valores de temperatura del día (tempDia) y de la semana (tempSemana) */

    let tempDia = document.getElementById("bigTemp").innerText
    let tempSemana = document.querySelectorAll(".mb-0")

    /* Conversion de valores de temperatura según formulas */

    function convertirFarenheit() {
        document.getElementById("bigTemp").innerText = tempDia * 1.8 + 32

        tempSemana.forEach((dia) => {
            dia.innerText = Math.round((dia.innerText * 1.8 + 32) * 10) / 10
        })
    }

    function convertirCelsius() {
        document.getElementById("bigTemp").innerText = tempDia

        tempSemana.forEach((dia) => {
            dia.innerText = Math.round(((dia.innerText - 32) / 1.8) * 10) / 10
        })
    }

    /* Prevenimos que input checkbox esté por default en falso (Celsius) */
    const inputCheckBox = document.getElementById("cajaCheck")

    inputCheckBox.checked = false;

    /* Añadimos listener */
    /* checkbox = F => convertisCelsius() */
    /* checkbox = F => convertisCelsius() */
    inputCheckBox.addEventListener('change', function () {
        if (!this.checked) {
            convertirCelsius()
        } else {
            convertirFarenheit()
        }
    })
}

celcius_a_farenheit()


