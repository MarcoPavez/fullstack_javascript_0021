$(document).ready(function() {
    // Function to handle the click event for "svg-tienda"
    $("#svg-tienda").click(function() {
      $(this).parent().css({
        "background-color": "green",
        "color": "lightgreen",
        "border-color": "lightgreen"
      });
      $("#tienda").css({
        "background-color": "green"
      })
    });
  
    // Function to handle the click event for "svg-otras-tiendas"
    $("#svg-otras-tiendas").click(function() {
      $(this).parent().css({
        "background-color": "yellow",
        "color": "red",
        "border-color": "red"
      });
      $("#otras-tienda").css({
        "background-color": "yellow"
      })
    });
  
    // Function to handle the click event for "svg-online"
    $("#svg-online").click(function() {
      $(this).parent().css({
        "background-color": "blue",
        "color": "lightblue",
        "border-color": "lightblue"
      });
      $("#online").css({
        "background-color": "blue"
      })
    });
  });
  