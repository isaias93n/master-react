import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {

    const tituloComponente = "Añadir película";
    const [peliState, setPeliState]= useState({
        titulo:'', 
        descripcion:''
    });

    const {titulo, descripcion} = peliState;

    const conseguirDatosForm = e => {
        e.preventDefault();

        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        let peli = {
            id: new Date().getTime(),
            titulo, 
            descripcion
        }

        //Guarda estado
        setPeliState(peli);

        setListadoState(elementos => {
            return[...elementos, peli];
        });

        //Guardar en almacenamiento local
        // guardarEnStorage(peli);

        GuardarEnStorage("pelis",peli);
    }

    

    return (
        <div className="add">
            <h3 className="title">{tituloComponente}</h3>

            <strong>
                {(titulo && descripcion) && "Haz creado la pelicula " + titulo}
            </strong>

            <form onSubmit={conseguirDatosForm}>
                <input type="text"
                    id="titulo"
                    name='titulo'
                    placeholder="Titulo"
                />

                <textarea
                    id="descripcion"
                    name='descripcion'
                    placeholder="Descripcion" >
                </textarea>

                <input
                    type="submit"
                    id="save"
                    value="Guardar" />
            </form>
        </div>
    )
}
