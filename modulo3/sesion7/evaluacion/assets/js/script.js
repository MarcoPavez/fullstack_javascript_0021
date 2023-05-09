const vehiculo = {
    marca: "Peakauto",
    modelo: "Goenx",
    motor: {
        tipoMotor: "4 CILINDROS EN LÍNEA",
        bloqueMotor: "ALEACIÓN/ALUMINIO",
        desplazamiento: "1.99/1996",
        rpm: "155 @ 6500",
        lineaRoja: 6700,
        inyeccion: "PUNTOS MÚLTIPLES"
    }
}

let marcaVehiculo = undefined ?? vehiculo.marca;
let modeloVehiculo = undefined ?? vehiculo.modelo;
let tipoMotor = undefined ?? vehiculo.motor?.tipoMotor;
let psi = vehiculo.motor?.psi;
let bloqueMotor = vehiculo.motor?.bloqueMotor;
let desplazamiento = vehiculo.motor?.desplazamiento;
let rpm = vehiculo.motor?.rpm;
let lineaRoja = vehiculo.motor?.lineaRoja;
let smartAssist = vehiculo.motor?.smartAssist;
let inyeccion = vehiculo.motor?.inyeccion;
let encendidoRemoto = vehiculo.motor?.encendidoRemoto;

console.log(marcaVehiculo)
console.log(modeloVehiculo)
console.log(tipoMotor)
console.log(psi)
console.log(bloqueMotor)
console.log(desplazamiento)
console.log(rpm)
console.log(lineaRoja)
console.log(smartAssist)
console.log(inyeccion)
console.log(encendidoRemoto)