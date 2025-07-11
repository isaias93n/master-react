import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Contacto = () => {

  const compartida = useContext(PruebaContext);

  console.log(compartida);

  return (
    <div>
      <h1>Contacto</h1>
      <p>Pagina de contacto</p>

      <p>Valor compartido <strong>{ JSON.stringify(compartida) }</strong></p>
    </div>
  )
}
