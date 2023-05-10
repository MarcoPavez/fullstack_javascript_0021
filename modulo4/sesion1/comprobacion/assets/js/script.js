let btnSubmit = document.getElementById("btn-submit");

let valor = document.getElementById("monto")
let interes = document.getElementById("interes")
let cuotas = document.getElementById("cuotas")

const main = document.getElementById("resultado")

function calculo(value, interest, dues){
    let interestDecimal = interest/100;
    let interestFinal = Math.round((value / dues) * interestDecimal)
    let valorFinal = Math.round((value / dues) + interestFinal);
    return valorFinal;
}

btnSubmit.addEventListener("click", () => {
    let valorCalculo = valor.value;
    let interesCalculo = interes.value;
    let cuotasCalculo = cuotas.value;

    /* Aplica función de cálculo y agrega separador numérico "." */
    let final = calculo(valorCalculo,interesCalculo,cuotasCalculo).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

    let resultado = document.createElement("p");
    resultado.innerText = `Puedes pagar en ${cuotasCalculo} cuotas de $${finalFinal}`
    main.innerText = resultado.innerText
})

