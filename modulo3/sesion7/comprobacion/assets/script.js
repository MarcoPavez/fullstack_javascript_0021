/* Accede al DOM y define palabras a reemplazar, su reemplazo, cantidad y colores asignados */
let text = document.getElementById("parrafo").textContent

const words = ["sed", "vehicula", "vivamus", "nam", "eros", "vestibulum", "quam", "sollicitudin", "finibus", "dictum", "morbi"];
const posicion = ["UNO","DOS","TRES","CUATRO","CINCO","SEIS","SIETE","OCHO","NUEVE","DIEZ","ONCE"]
const cantidadOriginal = [6,4,3,3,2,2,2,2,2,2,2]
const colores = ["#FF5500","#FF99B2","#FF99F5","#BB99FF","#99C5FE","#00CEFF","#01FFFE","#00FF9F","#B6FF01","#FFFF00","#FFB600"]

/* Crea función constructora para contener palabras y cantidad de veces reemplazada */
function Contar(palabra,cantidad){
    this.palabra=palabra,
    this.cantidad=cantidad
}
/* Crea array para almacenar objeto de palabra-cantidad */
let arrayObjetos = []

/* Reemplaza las palabras */
for (let i = 0; i < words.length; i++) {
  const regex = new RegExp(words[i], 'g');
  text = text.replaceAll(regex, `<b>${posicion[i]}</b>`);
}
document.getElementById("parrafo").innerHTML = text


/* Contar cantidad de veces que se reemplazó la palabra en el texto */
for ( let j = 0; j < posicion.length; j ++){
    const regex = new RegExp(posicion[j], 'gi');
    let count = (text.match(regex) || []).length

    let contar = new Contar(words[j], count)
    arrayObjetos.push(contar)
}

/* Imprimir en consola palabra a reemplazar, cantidad de veces reemplazada y color asignado */
for (let k = 0; k < arrayObjetos.length; k ++) {
    arrayObjetos[k].cantidad ||=(posicion[k] == cantidadOriginal[k])
    console.log(`%c${arrayObjetos[k].palabra}: ${arrayObjetos[k].cantidad}`, `color: ${colores[k]}`)
}