import React, { useMemo, useState } from 'react'

export const Tareas = () => {

    const [tareas, setTareas] = useState([]);
    const [contador, setContador] = useState(1230);

    const guardarTareas = (e) => {
        e.preventDefault();

        let tareas_actualizadas = [...tareas, e.target.titulo.value];

        setTareas(tareas_actualizadas);

    };

    const borrarTarea = (id) => {

        let nuevas_tareas = tareas.filter((tarea, indice) => indice !== id);

        setTareas(nuevas_tareas);
    }

    const sumar = (e) => {
        setContador(contador+1);
    }

    const contadoresPasados = (acumulacion) => {
        for(let i=0; i <= acumulacion; i++){
            console.log("Ejecutando acumulacion de contadores del pasado...");
            console.log("Se le sumó " + i + " al contador");
        }

        return `Contador manual de tareas: ${acumulacion}`
    }

    //se usa useMemo para renderizar este valor solo si realmente ha cambiado. se activa como un useEffect
    //Cualquier otro valor que actualice no va a afectar este 
    const memoContadores = useMemo(() => {
        contadoresPasados(contador)
    }, [contador]);

  return (
    <div className='tareas-container'>
        <h1>Mis tareas</h1>
        <form onSubmit={guardarTareas}>
            <input type='text' name='titulo' placeholder='Describe la tarea'/>
            <input type='submit' value='Guardar' />
        </form>

        <h3>{memoContadores}</h3>
        
        <button onClick={sumar}>Sumar</button> 

        <h3>Lista de tareas</h3>
        {
            tareas.map((tarea, indice) => {
                return (<li key={indice}>
                    {tarea} &nbsp;
                    <button onClick={() => borrarTarea(indice)} >x</button>
                    </li>)
            })
        }

    </div>
  )
}
