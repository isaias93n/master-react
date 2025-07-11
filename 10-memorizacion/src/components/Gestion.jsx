import React, { useCallback, useEffect, useRef, useState } from 'react'
import { Empleados } from './Empleados'

export const Gestion = () => {

    const [nombre, setNombre]=useState('');
    const[pagina, setPagina] = useState(1);

    const asignarGestor = (e) => {
        setNombre(e.target.value);
    };

    useEffect(() => {
      console.log("La vista de Gestion se ha renderizado");
    }, [nombre, pagina]);

    const mostrarMensaje = useCallback( () => {
      console.log('Hola soy un mensaje desde el componente empleados');
    }, [pagina]);

  return (
    <div>
        <h1>Nombre del gestor: {nombre}</h1>
        <input type='text' onChange={asignarGestor} placeholder='Introduce tu nombre de gestor' />

        <h2>Listado de empleados</h2>
        <p>Los usuarios son gestionados por {nombre} vienen de jsonplaceholder</p>
        <button onClick={() => {setPagina(1)}}>Pagina 1</button>
        <button onClick={() => {setPagina(2)}}>Pagina 2</button>

        <Empleados pagina={pagina} mensaje={mostrarMensaje}/>

    </div>
  )
}
