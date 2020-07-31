$(document).ready(function(){

  $('#btn-serie').click(function(){
    // Ejecuta la creacion de la serie
    let termino = parseInt($('#primertermino').val());
    let numero = parseInt($('#numerotermino').val());
    let html_salida = '';
    for (let index = 0; index < numero; index++) {
      if ( index % 2 === 0 ) {
        html_salida += '<li class="list-group-item d-flex justify-content-between lh-condensed"><span class="my-0">Termino ' + parseInt(index+1) + ':</span><span class="text-muted">' + termino + '</span></li>';
      } else {
        html_salida += '<li class="list-group-item d-flex justify-content-between lh-condensed"><span class="my-0">Termino ' + parseInt(index+1) + ':</span><span class="text-muted">' + sumaDigitos(termino) + '</span></li>';
        termino+=sumaDigitos(termino);
      }
    }
    $('#resultado').html(html_salida);
  });

  $('#borrar').click(function(){
    // Borra los resultados
    $('#resultado').html('<li class="list-group-item d-flex justify-content-between lh-condensed"><span class="my-0">Aun no hay resultados.</span></li>');
  });
});


function sumaDigitos(numero = 0) {
  /*
    SUMA DE DIGITOS

      Dado un  numero entero suma sus digitos
      Ej:
      3095 => 3 + 0 + 9 + 5 = 17

    EXPLICACION: Tomemos como ejemplo al número 35
      
      numero.ToString()
      El numero 35, es convertido en un String "35"

      numero.toString().split("")
      Luego el string "35" es convertido en un array igual a ["3", "5"]

      numero.toString().split("").reduce((total, item) => parseInt(total) + parseInt(item));
      El array ["3", "5"] es 'reducido' a un valor que en este caso es la suma total de sus elementos
      convertidos en enteros gracias a parseInt()

      De forma alternativa este metodo puede resultar mas comprensible:
      return numero.toString().split("").map(elemento => parseInt(elemento)).reduce((total, item) => total + item);
  */
  return parseInt(numero.toString().split("").reduce((total, item) => parseInt(total) + parseInt(item)));
}