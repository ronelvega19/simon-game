






    $("body").on("keypress", function(event){

        if(event.key == event.key){
           $("h1").text("Level");

        }   
    });


    var levelArray = [];

    




$("#green").on("click", function(){

    $("#green").addClass("pressed");
    setTimeout(() => {
        $("#green").removeClass("pressed");
    }, 100);
});

$("#red").on("click", function(){

    $("#red").addClass("pressed");
    setTimeout(() => {
        $("#red").removeClass("pressed");
    }, 100);
});

$("#yellow").on("click", function(){

    $("#yellow").addClass("pressed");
    setTimeout(() => {
        $("#yellow").removeClass("pressed");
    }, 100);
});

$("#blue").on("click", function(){

    $("#blue").addClass("pressed");
    setTimeout(() => {
        $("#blue").removeClass("pressed");
    }, 100);
});








    


