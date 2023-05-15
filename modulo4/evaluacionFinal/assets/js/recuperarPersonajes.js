export function traerPrincipales(arrayPersonajes, node) {
    arrayPersonajes.forEach(item => {
        let card = document.createElement("div")
        card.setAttribute("class", "carta personaje")
        card.innerHTML =
            `
            <div class="container-circle">
                <svg xmlns="http://www.w3.org/2000/svg" class="circle" viewBox="0 0 512 512"><path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"/></svg>
            </div>
            <div class="container-texto">
                <h4>${item.name}</h4>
                <p>Estatura: ${item.height} cm. Peso:${item.mass} kg.<p>
            </div>
            `
        node.appendChild(card)
    })
}


export function quitarPrincipales() {
    let cartaPersonajes = document.getElementsByClassName("personaje")

    for (let carta of cartaPersonajes) {
        carta.style.display = "none";
    }
}
