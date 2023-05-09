// Acceder a elementos del DOM
let inputNombreGasto = document.getElementById("inputNombreGasto");
let inputMontoGasto = document.getElementById("inputMontoGasto");
let bodyTabla = document.getElementById("bodyTabla");

let inputPresupueto = document.getElementById("inputPresupueto");
let presupuesto = document.getElementById("presupuesto");
let totalGastos = document.getElementById("totalGastos");
let saldo = document.getElementById("saldo");

let btnCalcular = document.getElementById("btnCalcular");
let btnAnadir = document.getElementById("btnAnadir");

// Función constructora

function Gasto(nombre,monto){
    this.nombre = nombre;
    this.monto = monto;
};

// Array de gastos para objetos "Gasto"
let listaGastos = [];

// Agrega un gasto y lo añade al array
function agregarGasto(nombre,monto) {
    let gasto = new Gasto(nombre,monto);
    listaGastos.push(gasto);
    let computoSaldo = actualizarSaldo();
    if(computoSaldo < 0){
        listaGastos.pop();
        alert("No cuentas con el saldo suficiente")
    } else {
        let gastoActualizado = listaGastos.reduce((acumulador,valorActual) => acumulador + valorActual.monto, 0);
        totalGastos.innerHTML = String(gastoActualizado).replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    };
    actualizarSaldo();
}

// Interpola para actualizar tabla
function actualizarTabla(){
    let html = "";
    listaGastos.forEach((gasto,index) => {
        html += `
        <tr>
            <td>${gasto.nombre}</td>
            <td>${gasto.monto}</td>
            <td style="cursor: pointer;"><i class="fa-solid fa-trash" onclick="eliminar(${index})"></i></td>
        </tr>
        `
    })
    bodyTabla.innerHTML = html;
    actualizarSaldo();
}


// Eliminar gasto
function eliminar(index){
    listaGastos = listaGastos.filter((gasto,indice) => indice != index);
    let gastoActualizado = listaGastos.reduce((acumulador,valorActual) => acumulador + valorActual.monto, 0);
    totalGastos.innerHTML = String(gastoActualizado).replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    actualizarTabla();
}


// Actualizar el saldo
function actualizarSaldo(){
    let pptoResumen = presupuesto.innerHTML.replaceAll(".","");
    let gastosResumen = listaGastos.reduce((acumulador,valorActual) => acumulador + valorActual.monto,0);
    let nuevoSaldo = String(pptoResumen - gastosResumen);
    saldo.innerText = nuevoSaldo.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return nuevoSaldo;
}


// Agrega funcion al btn calcular
btnCalcular.addEventListener('click', function() {
    presupuesto.innerHTML = inputPresupueto.value.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    actualizarSaldo();
    presupuesto.innerHTML > 0 ? btnAnadir.removeAttribute("disabled") : btnAnadir.setAttribute("disable",true);
})

// Agrega funcion al btnAnadir
btnAnadir.addEventListener('click', function() {
    let nombre = inputNombreGasto.value;
    let monto = parseInt(inputMontoGasto.value);
    agregarGasto(nombre,monto);
    actualizarTabla();
})