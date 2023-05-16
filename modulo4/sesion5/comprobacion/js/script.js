$(document).ready(function () {
    var button = $('#button');

    button.on('click', function () {
        button.text('¿Estás seguro?');

        button.on('dblclick', function () {
            button.text('Ok!');

            button.on('mouseleave', function () {
                button.text('Comprado');
            });
        });
    });
});