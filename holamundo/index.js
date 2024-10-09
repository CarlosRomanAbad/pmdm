$(document).ready(function() {

    //Selector de etiquetas
    $("h1").html("adios mundo cruel");

    //Selector de id

    $("#page-title").html("Hola Mundo");

    //Selector de clase
    $(".red").attr("style", "color: red");


    //Evento click
    $(document).on("click", "#h1-clear", function() {
        $("h1").html("");
    });

    $(document).on("click", "#h1-change", function() {
        //Selector de etiquetas
    $("h1").html("adios mundo cruel");

    //Selector de id

    $("#page-title").html("Hola Mundo");

    //Selector de clase
    $(".red").attr("style", "color: red");
        $("h1").html("adios mundo cruel");
    });

    $(document).on("click", "#add-yellow", function() {
        $("h1").attr("style", "color: yellow");
    });


    $(".test").append("<li>Esto es un h1</li>");


    let i = 0;
        $(document).on("click", "#add", function() {
            
            

                $(".text").append("<p>Esto"+ ++i+" es un parrafo  </p> <button class='remove'>Eliminar</button>");
                
                
        });
   
        $(document).on("click", ".remove", function() {
            
            $(this).prev().remove();
            
            $(this).remove(); 
        });
});