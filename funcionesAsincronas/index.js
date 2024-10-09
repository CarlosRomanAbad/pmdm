$(document).ready(function() {



    $(document).on("click","btn-get-data",function(){

        getPokemonList()
    });

    var listadoPersonajes

    $.ajax({
        url: 'https://swapi.dev/api/people',
        method : "GET",
        
    }).done(function(data){

        var json =  JSON.parse(data)
        debugger
        $("#data-content").html(json)
        /*
        Lo que se programa dentro de esta funcion sera ejecutado cuando se haya resuelto la peticion asicrona
        , es decir cuando llegue la respuesta del servidor
        */

    });



}); 