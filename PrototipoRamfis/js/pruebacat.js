function turismo() {  
    var turismo = document.getElementById("TURISMO");
    var hospedaje = document.getElementById("HOSPEDAJE");
    var ecoturismo =  document.getElementById("ECOTURISMO");
    var eventos = document.getElementById("EVENTOS");
    var playas = document.getElementById("PLAYAS");
    var cultural = document.getElementById("CULTURAL");
    var museos = document.getElementById("MUSEOS");
    var compras = document.getElementById("COMPRAS");
    var religioso = document.getElementById("RELIGIOSO");

    if (turismo.style.display === "none") {
        turismo.style.display = "block";
        hospedaje.style.display = "none";
        ecoturismo.style.display = "none";
        eventos.style.display = "none";
        playas.style.display = "none";
        cultural.style.display = "none";
        museos.style.display = "none";
        compras.style.display = "none";
        religioso.style.display = "none";    
    } else {
        turismo.style.display = "none";
        hospedaje.style.display = "none";
        ecoturismo.style.display = "none";
        eventos.style.display = "none";
        playas.style.display = "none";
        cultural.style.display = "none";
        museos.style.display = "none";
        compras.style.display = "none";
        religioso.style.display = "none";
    }
}

