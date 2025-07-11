import React, { useState } from 'react'
import { useMayus } from '../hooks/useMayus'

export const PruebasCustom = () => {

    const {estado, mayusculas, minusculas, concatenar} = useMayus("Isaias Navarrete");

  return (
    <div>
        <h1>Probando componentes personalizados</h1>
        {estado}

        <button onClick={mayusculas}>Mayusculas</button>
        <button onClick={minusculas}>Minusculas</button>
        <button onClick={ () => concatenar(" - Probando")}>Concatenar</button>


    </div>
  )
}
