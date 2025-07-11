import React from 'react'
import PropTypes from "prop-types";

export const TercerComponente = ({nombre, apellidos, ficha, defectoPrueba= "123"}) => {

    //const {nombre, apellidos, ficha} = props;
  return (
    <div>
        <h1>Comunicacion entre componentes</h1>
        <ul>
            <li>{nombre}</li>
            <li>{apellidos}</li>
            <li>{ficha.grupo}</li>
            <li>{ficha.estado}</li>
            <li>{defectoPrueba}</li>
        </ul>
    </div>
  )
}

//no sirve para react 19 o superior
TercerComponente.propTypes = {
    nombre: PropTypes.string.isRequired,
    apellidos: PropTypes.string,
    ficha: PropTypes.object
}

//No sirve para react 19 o superior
TercerComponente.defaultProps = {
    defectoPrueba: "456"
}