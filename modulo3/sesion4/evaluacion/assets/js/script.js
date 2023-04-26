const botonCheckbox = document.getElementById("botonCheckbox");
const correo = document.getElementById("correo");
const submit = document.getElementById("submit");

submit.addEventListener("click", function (event) {
  if (!botonCheckbox.checked || !correo.checkValidity()) {
    if (!botonCheckbox.checked) {
      alert("Debes aceptar los términos y condiciones.");
    } else if (!correo.checkValidity()) {
      alert("Debes ingresar una dirección de correo electrónico válida.");
    }
  } else {
    alert("Felicitaciones, pronto te escribiremos");
  }
});
