function obtenerTodosLosDigimon() {

    fetch("https://digimon-api.vercel.app/api/digimon")
        .then(response => response.json())
        .then(datos => {

            let div = ''

            for (let digimon of datos) {

                div += `<div class="carta">
                            <img src=${digimon.img} alt="Imagen de un digimon" class="imgDigimon">
                           
                                <h5 id="tituloNombreDigimon">${digimon.name}</h5>
                                <p>${digimon.level}</p>
                                <button href="#" onclick="obtenerDigimon('${digimon.name}')" class="imgDigimon">Conocer más</button>
                     
                        </div>`

                document.getElementById("cartasDigimon").innerHTML = div
            }
        })
}

obtenerTodosLosDigimon()

function obtenerDigimon(nombreDigimon) {

    fetch(`https://digimon-api.vercel.app/api/digimon/name/${nombreDigimon}`)
        .then(response => response.json())
        .then(datos => {

            let divIndividual = ''

            divIndividual = `<div id="cartaIndividualDigimon">
                                <img src=${datos[0].img} alt="Imagen_de_un_digimon">
                                <div>
                                    <h5>${datos[0].name}</h5>
                                    <p>${datos[0].level}</p>
                                    <button onclick="obtenerTodosLosDigimon()">Regresar</button>
                                </div>
                            </div>`

            document.getElementById("cartasDigimon").innerHTML = divIndividual
        })
}


const btnTop = document.getElementById("btn-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document
btnTop.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});