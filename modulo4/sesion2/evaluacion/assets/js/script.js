let duracion = document.getElementById("duracion");
let duracionDias = document.getElementById("duracion-dias")
let btnSubmit = document.getElementById("btn-submit")

btnSubmit.addEventListener("click", () => {

    let semanasDuracion = duracion.value
    let diasDuracion = duracionDias.value 
    let inicio = 1;

    let arrayEjercicios = ["sentadillas","bancos","peso muerto","prensas"]

    for (let i = 1; i <= semanasDuracion; i++) {
        console.log(`Semana ${i}:`);
        for (let j = 1; j <= diasDuracion; j++) {
          const exerciseIndex = (i + j) % arrayEjercicios.length;
          const exercise = arrayEjercicios[exerciseIndex];
          console.log(`Dia ${inicio}: ${exercise}`);
          inicio += 2
        }
       
      }

})