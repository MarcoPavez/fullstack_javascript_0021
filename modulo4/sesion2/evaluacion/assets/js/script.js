let duracion = document.getElementById("duracion");
let duracionDias = document.getElementById("duracion-dias")
let btnSubmit = document.getElementById("btn-submit")

btnSubmit.addEventListener("click", () => {

    let semanasDuracion = duracion.value
    let diasDuracion = duracionDias.value 
    let inicio = 1;

    let arrayEjercicios = ["sentadillas","bancos","peso muerto","prensas"]
    let dias = ["lunes","martes","miercoles","jueves","viernes","sabado","domingo"]
   /*  for (let i = 1; i <= semanasDuracion; i++) {
        console.log(`Semana ${i}:`);
        for (let j = 1; j <= diasDuracion; j++) {
          const exerciseIndex = (i + j) % arrayEjercicios.length;
          const exercise = arrayEjercicios[exerciseIndex];
          console.log(`Dia ${inicio}: ${exercise}`);
          inicio += 2
        }
       
      } */

      for (let i = 1; i <= semanasDuracion; i++) {
        console.log(`Semana ${i}:`);
        for (let j = 1; j <= diasDuracion; j++) {
          const exerciseIndex = (i + j) % arrayEjercicios.length;
          const exercise = arrayEjercicios[exerciseIndex];
          console.log(`Dia ${inicio}: ${exercise}`);
          if(diasDuracion == 1){
            inicio += 7
          } else if(diasDuracion > 1 && diasDuracion <= 3){
            inicio += 3
          } else if(diasDuracion == 4) {
            inicio += 2
          } else if(diasDuracion > 4 && diasDuracion <= 7){
            inicio += 1
          } else {
            alert("Ingresa un número del 1 al 7");
            break;
          }
        }
       
      } 

})