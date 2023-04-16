$(document).ready(function () {
    // Add an event listener to the form when it is submitted
    $('#formContacto').submit(function (event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Get the values of the form inputs
        var nombre = $('#nombre').val();
        var correo = $('#correo').val();
        var telefono = $('#telefono').val();
        var motivo = $('#motivo').val();
        var mensaje = $('#mensaje').val();

        // Define a regular expression to validate the email address
        var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        // Define a regular expression to validate the phone number
        var phoneRegex = /^[0-9]{9}$/;

        // Validate the form inputs
        if (nombre.length < 3) {
            alert('Por favor ingrese un nombre válido');
        } else if (!emailRegex.test(correo)) {
            alert('Por favor ingrese un correo electrónico válido');
        } else if (!phoneRegex.test(telefono)) {
            alert('Por favor ingrese un número de teléfono válido. Debe tener 9 cifras.');
        } else if (motivo == '') {
            alert('Por favor seleccione un motivo');
        } else if (mensaje == '') {
            alert('Por favor ingrese un mensaje');
        } else {
            // Submit the form if all inputs are valid
            alert(`Gracias ${nombre}, agradecemos su interés. Nos pondremos en contacto con usted.`)
            this.submit();
        }
    });


    $('#formReserva').submit(function (event) {
        // Prevent the form from submitting by default
        event.preventDefault();

        // Get the values of the form inputs
        var nombreR = $('#nombreR').val();
        var correoR = $('#correoR').val();
        var telefonoR = $('#telefonoR').val();
        var fechaR = $('#fechaR').val();
        var horaR = $('#horaR').val();
        var asistentesR = $('#asistentesR').val();

        // Define a regular expression to validate the email address
        var emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

        // Define a regular expression to validate the phone number
        var phoneRegex = /^[0-9]{9}$/;

        // Validate the form inputs
        if (nombreR.length < 3) {
            alert('Por favor ingrese un nombre válido');
        } else if (!emailRegex.test(correoR)) {
            alert('Por favor ingrese un correo electrónico válido');
        } else if (!phoneRegex.test(telefonoR)) {
            alert('Por favor ingrese un número de teléfono válido. Debe tener 9 cifras.');
        } else if (fechaR == '') {
            alert('Por favor seleccione un motivo');
        } else if (horaR == '') {
            alert('Por favor ingrese un mensaje');
        } else if (asistentesR == "") {
            alert('Por favor ingrese un número de asistentes')
        } else {
            // Submit the form if all inputs are valid
            alert(`Gracias ${nombreR} por reservar con nosotros. Hemos registrado ${asistentesR} asistentes. Se ha enviado un código de confirmación al correo ${correoR}. Gracias por preferirnos.`)
            this.submit();
        }
    });



    $(document).ready(function() {
        // Add a click event listener to the image
        $(".divEjercicio").click(function() {
          // Get the width and height of the image
          var width = $(this).width();
          var height = $(this).height();
      
          // Calculate the center of the screen
          var centerX = ($(window).width() - width) / 2;
          var centerY = ($(window).height() - height) / 2;
      
          // Set the CSS properties of the image to position it in the center of the screen
          $(this).css({
            'position': 'fixed',
            'top': centerY + 'px',
            'left': centerX + 'px',
            'z-index': '9999'
          });
      
          // Add a click event listener to the document to return the image to its original position when clicked outside of it
          $(document).click(function(event) {
            if ($(event.target).closest('.divEjercicio').length == 0) {
              $('.divEjercicio').css({
                'position': 'static',
                'top': 'auto',
                'left': 'auto',
                'z-index': 'auto'
              });
              $(document).off('click');
            }
          }); 
        });
      });
      

});