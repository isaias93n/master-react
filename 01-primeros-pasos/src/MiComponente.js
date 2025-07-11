import React from 'react'

const MiComponente = () => {

    const nombre = "Isaias";
    const web = "isaias.com";

    let usuario = {
        nombre: "Isaias",
        apellido: "Navarrete",
        web: "isaiasnavarrete.com"
    };

    return(
        <div className='mi-componente'>
            <h2>Componente creado</h2>
            <h3>Datos del usuario</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre}</strong></li>
                <li>apellido: <strong>{usuario.apellido}</strong></li>
                <li>Web: <strong>{usuario.web}</strong></li>
            </ul>
        </div>

    ) 

};

export default MiComponente;