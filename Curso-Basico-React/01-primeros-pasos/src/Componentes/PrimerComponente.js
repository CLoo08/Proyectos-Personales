import React, {useState}  from 'react';

export const PrimerComponente = () => {

    //let nombre = "Christian";
    let edad = "22";

    const [nombre, setNombre] = useState("Christian");

    let materias = [
        "Matemáticas",
        "Español",
        "Inglés",
        "Ciencias Naturales"
    ]

    const cambiarNombre = (nuevoNombre) => {
       setNombre(nuevoNombre);
    }

    return (
        <div>
            <h1>Mi Primer Componente</h1>
            <p>Este es un texto en mi componente</p>
            <p>Mi nombre es: <strong className={nombre.length >= 5 ? 'verde' : 'rojo'}> {nombre} </strong></p>
            <p>Mi edad es: {edad} </p>

            <input type="text" onChange={e => cambiarNombre(e.target.value)} placeholder="Cambia el nombre"></input>

            <button onClick={e =>{
                console.log("El valor guardado en tu estado es: ", nombre);   
            }}>  Mostrar valor de estado</button>           

            <button onClick={e => cambiarNombre("Christian J Loo V")}>
                Cambiar nombre
            </button>

            <h2>Materias:</h2>
            <ul>
                {
                    materias.map((materias, indice) => {                 //Función map: recorre un array
                        return (<li key={indice}>
                            {materias}
                        </li>
                        )
                    })
                }
            </ul>
        </div>    
    )
}