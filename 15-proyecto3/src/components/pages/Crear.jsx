import React, { useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Peticion } from '../../helpers/Peticion';
import { Global } from '../../helpers/Global';

export const Crear = () => {

  const {formulario, enviado, cambiado} = useForm({});
  const [resultado, setResultado] = useState("no_enviado");

  const guardarArticulo = async(e) => {
    e.preventDefault();
    let nuevoArticulo = formulario;

    const {datos, cargando} = await Peticion(Global.url + "crear", "POST", nuevoArticulo);

    if(datos.status === "success"){
        setResultado("guardado");
      }else{
        setResultado("error");
      }

    console.log(datos);

    if(datos.status === "success" && fileInput.files[0]){
      setResultado("guardado");

      const fileInput = document.querySelector("#file");
      console.log(fileInput.files);

      const formData = new FormData();
      formData.append('file', fileInput.files[0]);

      const subida = await Peticion(Global.url + "subir-imagen/" + datos.articulo._id, "POST", formData, true);

      if(subida.datos.status === "success"){
        setResultado("guardado");
      }else{
        setResultado("error");
      }

    }else{
      setResultado("error");
    }
  }

  

  return (
    <div className='jumbo'>
      
      <h1>Crear aticulo</h1>
      <p>Formulario para crear un articulo</p>
      <pre>{JSON.stringify(formulario)}</pre>

      <strong>{resultado == "guardado" ? "Articulo guardado correctamente" : ""}</strong>
      <strong>{resultado == "error" ? "Los datos proporcionados son incorrectos" : ""}</strong>
      {/* <strong>{resultado == "" ? "Articulo guardado correctamente" : ""}</strong> */}

      <form className='formulario' onSubmit={guardarArticulo}>

        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type='text' name='titulo' onChange={cambiado}/>
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea type='text' name='contenido' onChange={cambiado} />
        </div>

        <div className='form-group'>
          <label htmlFor='file'>Imagen</label>
          <input type='file' name='file' id='file' />
        </div>

        <input type='submit' value="Guardar" className='btn btn-success' />

      </form>

    </div>
  )
}
