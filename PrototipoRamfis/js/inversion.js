$(document).ready(function(){
    $("#Alquiler").click(function(){
        $(".Terrenos, .Casas, .Habitaciones, .Parcelas, .Resort").hide();
        $(".Alquiler").show();
    });
    $("#Terrenos").click(function(){
        $(".Alquiler, .Casas, .Habitaciones, .Parcelas, .Resort").hide();
        $(".Terrenos").show();
    });
    $("#Casas").click(function(){
        $(".Alquiler, .Terrenos, .Habitaciones, .Parcelas, .Resort").hide();
        $(".Casas").show();
    });
    $("#Habitaciones").click(function(){
        $(".Alquiler, .Terrenos, .Casas, .Parcelas, .Resort").hide();
        $(".Habitaciones").show();
    });
    $("#Parcelas").click(function(){
        $(".Alquiler, .Terrenos, .Casas, .Habitaciones, .Resort").hide();
        $(".Parcelas").show();
    });
    $("#Resort").click(function(){
        $(".Alquiler, .Terrenos, .Casas, .Habitaciones, .Parcelas").hide();
        $(".Resort").show();
    });
});