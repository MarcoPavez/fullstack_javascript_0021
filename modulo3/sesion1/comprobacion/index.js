let fecha = new Date();

document.getElementById("insertTime").innerHTML = `${fecha.getHours()}:${fecha.getMinutes()}`;
document.getElementById("terminalNumber").innerHTML = Math.floor(Math.random() * 12);;
document.getElementById("insertDate").innerHTML = `${fecha.getDate()}-${fecha.getMonth()}-${fecha.getFullYear()}`;;
document.getElementById("flightNumber").innerHTML = Math.ceil(Math.random() * 10);;

alert(
  "Pasajero, se le recuerda que para abordar el avión tendrá que tener en su mano su pasaporte y su boleto de embarque. Manténgase atento a esta plataforma."
);
