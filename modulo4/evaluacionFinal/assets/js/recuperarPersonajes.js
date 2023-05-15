export function traerPrincipales(arrayPersonajes, node) {
    arrayPersonajes.forEach(item => {
        let card = document.createElement("div")
        card.setAttribute("class", "carta personaje")
        card.innerHTML =
            `
                <h4>${item.name}</h4>
                <p>Estatura: ${item.height} cm. Peso:${item.mass} kg.<p>
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
