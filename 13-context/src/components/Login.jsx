import React, { useContext } from 'react'
import { PruebaContext } from '../context/PruebaContext';

export const Login = () => {

  const {usuario, setUsuario} = useContext(PruebaContext)

const guardarDatos = (e) => {
  e.preventDefault();

  let usuario_identificado = {
    username: e.target.username.value,
    nombre: e.target.nombre.value,
    web: e.target.web.value
  };


  setUsuario(usuario_identificado)

}


  return (
    <div>
      <h1>Identificate</h1>
      <p>Pagina de Login</p>

      <form className='login' onSubmit={guardarDatos}>

        <input type='text' name='username' placeholder='Username:' />
        <input type='text' name='nombre' placeholder='Nombre:' />
        <input type='text' name='web' placeholder='Web:' />
        <input type='submit' value='Enviar' />
      </form>

    </div>
  )
}
