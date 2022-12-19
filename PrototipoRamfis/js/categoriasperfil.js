$(document).ready(function(){
  $(".btn-ALL").click(function(){
    $(".TURISMO, .HOSPEDAJE, .ECOTURISMO, .EVENTOS, .INVERSION, .PLAYAS, .CULTURAL, .MUSEOS, .COMPRAS, .RELIGIOSO, .FAVORITOS").show();
  });
  $(".btn-turismo").click(function(){
    $(".HOSPEDAJE, .ECOTURISMO, .EVENTOS, .INVERSION, .PLAYAS, .CULTURAL, .MUSEOS, .COMPRAS, .RELIGIOSO, .FAVORITOS").hide();
    $(".TURISMO").show();
  });
  $(".btn-hospedaje").click(function(){
    $(".TURISMO, .ECOTURISMO, .EVENTOS, .PLAYAS, .CULTURAL, .MUSEOS, .COMPRAS, .RELIGIOSO, .FAVORITOS").hide();
    $(".HOSPEDAJE").show();
  });
  $(".btn-ecoturismo").click(function(){
    $(".TURISMO, .HOSPEDAJE, .EVENTOS, .PLAYAS, .CULTURAL, .MUSEOS, .COMPRAS, .RELIGIOSO, .FAVORITOS").hide();
    $(".ECOTURISMO").show();
  });
  $(".btn-eventos").click(function(){
    $(".TURISMO, .HOSPEDAJE, .ECOTURISMO, .PLAYAS, .CULTURAL, .MUSEOS, .COMPRAS, .RELIGIOSO, .FAVORITOS").hide();
    $(".EVENTOS").show();
  });
  $(".btn-playas").click(function(){ 
    $(".TURISMO, .HOSPEDAJE, .ECOTURISMO, .EVENTOS, .CULTURAL, .MUSEOS, .COMPRAS, .RELIGIOSO, .FAVORITOS").hide(); 
    $(".PLAYAS").show();
  });
  $(".btn-cultural").click(function(){ 
    $(".TURISMO, .HOSPEDAJE, .ECOTURISMO, .EVENTOS, .PLAYAS, .MUSEOS, .COMPRAS, .RELIGIOSO, .FAVORITOS").hide(); 
    $(".CULTURAL").show();
  });
  $(".btn-museos").click(function(){ 
    $(".TURISMO, .HOSPEDAJE, .ECOTURISMO, .EVENTOS, .PLAYAS, .CULTURAL, .COMPRAS, .RELIGIOSO, .FAVORITOS").hide(); 
    $(".MUSEOS").show();
  });
  $(".btn-compras").click(function(){ 
    $(".TURISMO, .HOSPEDAJE, .ECOTURISMO, .EVENTOS, .PLAYAS, .CULTURAL, .MUSEOS, .RELIGIOSO, .FAVORITOS").hide(); 
    $(".COMPRAS").show();
  });
  $(".btn-religioso").click(function(){ 
    $(".TURISMO, .HOSPEDAJE, .ECOTURISMO, .EVENTOS, .PLAYAS, .CULTURAL, .MUSEOS, .COMPRAS, .FAVORITOS").hide(); 
    $(".RELIGIOSO").show();
  });
  $(".btn-favoritos").click(function(){ 
    $(".TURISMO, .HOSPEDAJE, .ECOTURISMO, .EVENTOS, .PLAYAS, .CULTURAL, .MUSEOS, .COMPRAS, .RELIGIOSO").hide(); 
    $(".FAVORITOS").show();
  });
});

