import React, { useEffect } from 'react'

export const AvisoComponent = () => {

    //para detectar que un componente se montó, se hace con useEffect, 
    //dejando el segundo parametro como arreglo vacío
    useEffect(() => {
        alert("El componente AvisoComponent esta montado");


        //Para detectar que un componente se desmontó, se hace dentro del useEffect,
        //con un return
        return () => {
            alert("Componente desmontado");
        }
    }, []);


  return (
    <div>
        <hr/>
        <h3>Saludos Isaias</h3>

        <button onClick={e => {

            alert("Bienvenido")
        }}>Mostrar alerta</button>
    </div>
  )
}
