//alert('Hola mundo'); -> Alerta por pantalla desde arriba

//Se definen variables
/*
var nombre = "Christian Loo";
var altura = 183;

//document.write(nombre, altura) -> Imprimir variables pero pegadad

var concatenacion = nombre + " " + altura; //Imprimir variables con un espacio en medio

//document.write(concatenacion)

var datos = document.getElementById("datos"); //Toma el id del div datos para mostrar la información en ese div

//datos.innerHTML = concatenacion;  Imprimir la variable concatenación en la página

datos.innerHTML = `
    <h1>Soy la caja de datos</h1>
    <h2>Mi nombre es: ${nombre}</h2>
    <h3>Mido: ${altura} cm </h3>
`;

if(altura >= 170){
    datos.innerHTML += '<h1>Eres una persona ALTA</h1>'; // += Añade este texto al que se estaba mostrando primero, si fuera solo = elimina el anterior text y se imprime solo este
}else{
    datos.innerHTML += '<h1>Eres una persona BAJITA</h1>';
}

for(var i = 2000; i<=2023; i++){
    //bloque de instrucciones

    datos.innerHTML += "<h2>Estamos en el año: </h2> "+i;
}
*/
function MuestraMiNombre(nombre, altura){
    /*var datos = document.getElementById("datos"); Toma el id del div datos para mostrar la información en ese div

    datos.innerHTML = concatenacion;  Imprimir la variable concatenación en la página

    datos.innerHTML = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm </h3>
    `;*/

    var misDatos = `
        <h1>Soy la caja de datos</h1>
        <h2>Mi nombre es: ${nombre}</h2>
        <h3>Mido: ${altura} cm </h3>
    `;

    return misDatos;
}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Christian Loo", 183)
}

imprimir();

var nombres = ['Mario', 'Juan', 'Pedro'];
alert(nombres[0]);

/* Función for
for(i = 0; i < nombres.length; i++){
    document.write(nombres[i] + '<br>')
}
*/

//Función de Callback = una función que se ejecuta dentro de otra
nombres.forEach(function(nombre){
    document.write(nombre + '</br>');
}
)

document.write('<p>');

//Función de Flecha

nombres.forEach((nombre) =>{
    document.write(nombre + '</br>');
});