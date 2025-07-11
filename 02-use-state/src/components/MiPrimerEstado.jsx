import React, {useState} from 'react'

export const MiPrimerEstado = () => {

    const [nombre, setNombre] = useState("Isaias");
    
    const cambiarNombre = (e, nombreFijo) => {

        setNombre(nombreFijo);

        console.log(e.target)
    }


  return (
    <div>
        <h3>Mi primer estado</h3>
        <strong className='label'>
            {nombre}
        </strong>
        &nbsp;
        <button onClick={ e => cambiarNombre(e, "De Jesus") }>Cambiar</button>

        &nbsp;
        <input type='text' onKeyUp={ e => cambiarNombre(e, e.target.value)} placeholder='Cambia el nombre'/>
    </div>
  )
}
