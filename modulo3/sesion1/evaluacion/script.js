let fecha = new Date();

document.getElementById("cajaInformativa").innerHTML = 
`<h1>¡Apresúrese!</h1><p>El plazo máximo para inscribirse es sólo 2 días después de la siguiente fecha: <br> ${fecha.getDate()}/${fecha.getMonth()}/${fecha.getFullYear()}`