import React from 'react'

export const EventoComponentes = () => {

    const hazDadoClick = (e, nombre)=>{
        alert("Has dado click " + nombre);
    }

    function hazDobleClick () {
        alert("Haz dado doble click")
    }

    const hazEntrado = (e, accion) => {
        console.log(`Haz ${accion} de la caja`);
    }

    const estasDentro = e => {
        console.log("Estas dentro");
    }

    const estasFuera = e => {
        console.log("Estas fuera");
    }

  return (
    <div>
        <h1>Eventos en react</h1>

        <p>
            {/* Evento click */}
            <button onClick={ e => hazDadoClick(e, "Isaias") }>Dame click</button>
        </p>

        <p>
            {/* Evento doble click */}
            <button onDoubleClick={ hazDobleClick }>Doble click</button>
        </p>

        <div id="caja"
            onMouseEnter={ e =>  hazEntrado(e, "entrado") }
            onMouseLeave={ e =>  hazEntrado(e, "salido") }
        >
            Pasa por aqui
        </div>

        <p>
            <input type='text' onFocus={ estasDentro} onBlur={estasFuera} placeholder='Introduce tu nombre' />
        </p>

        {/* <button onClick={(e) => {
            console.log(e);
            console.log("Este es un evento de click");

        }}>Dame click</button> */}
    </div>
  )
}
