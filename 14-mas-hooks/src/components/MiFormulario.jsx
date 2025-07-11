import React, { useState } from 'react'
import { useForm } from '../hooks/useForm'

export const MiFormulario = () => {

  const {formulario, enviado, cambiado} = useForm({});
 
  return (
    <div>
        <h1>Formulario</h1>
        <p>Formulario para guardar un curso</p>
        <p>Curso guardado: {formulario.input}</p>
        <pre className='codigo'>{JSON.stringify(formulario)}</pre>
        <form onSubmit={enviado} className='mi-formulario'>
            <input type='text' name='titulo' placeholder='Titulo' onChange={cambiado} />
            <input type='number' name='anio' placeholder='Año' onChange={cambiado} />
            <textarea name='descripcion' placeholder='Descripcion' onChange={cambiado} />
            <input type='text' name='autor' placeholder='Autor' onChange={cambiado} />
            <input type='email' name='email' placeholder='Email' onChange={cambiado} />

            <input type='submit' value="Enviar" />

        </form>
    </div>
  )
}
