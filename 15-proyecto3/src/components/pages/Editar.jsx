import React, { useEffect, useState } from 'react'
import { useForm } from '../../hooks/useForm'
import { Peticion } from '../../helpers/Peticion';
import { Global } from '../../helpers/Global';
import { useParams } from 'react-router-dom';

export const Editar = () => {

  const { formulario, enviado, cambiado } = useForm({});
  const [resultado, setResultado] = useState("no_enviado");
  const [articulo, setArticulo] = useState([]);
  const params = useParams();



  useEffect(() => {

    conseguirArticulo();

  }, []);

  const conseguirArticulo = async () => {

    
    const { datos } = await Peticion(Global.url + "articulo/" + params.id, "GET")

    // let peticion = await fetch(url, {
    //   method: "GET"
    // });
    // let datos = await peticion.json();
    if (datos.status === "success") {
      setArticulo(datos.articulo);
    } else {
      //nada
    }


  }

  const editarArticulo = async (e) => {
    e.preventDefault();
    enviado(e);
    let nuevoArticulo = formulario;

    console.log(nuevoArticulo);

    const { datos } = await Peticion(Global.url + "articulo/" + params.id, "PUT", nuevoArticulo);

    if (datos.status === "success") {
      setResultado("guardado");
    } else {
      setResultado("error");
    }

    console.log(datos);

    if (datos.status === "success" && fileInput.files[0]) {
      setResultado("guardado");

      const fileInput = document.querySelector("#file");
      console.log(fileInput.files);

      const formData = new FormData();
      formData.append('file', fileInput.files[0]);

      const subida = await Peticion(Global.url + "subir-imagen/" + datos.articulo._id, "POST", formData, true);

      if (subida.datos.status === "success") {
        setResultado("guardado");
      } else {
        setResultado("error");
      }

    } else {
      setResultado("error");
    }
  }



  return (
    <div className='jumbo'>

      <h1>Crear aticulo</h1>
      <p>Formulario para editar: {articulo.titulo}</p>
      <pre>{JSON.stringify(formulario)}</pre>

      <strong>{resultado == "guardado" ? "Articulo guardado correctamente" : ""}</strong>
      <strong>{resultado == "error" ? "Los datos proporcionados son incorrectos" : ""}</strong>
      {/* <strong>{resultado == "" ? "Articulo guardado correctamente" : ""}</strong> */}

      <form className='formulario' onSubmit={editarArticulo}>

        <div className='form-group'>
          <label htmlFor='titulo'>Titulo</label>
          <input type='text' name='titulo' onChange={cambiado} defaultValue={articulo.titulo} />
        </div>

        <div className='form-group'>
          <label htmlFor='contenido'>Contenido</label>
          <textarea type='text' name='contenido' onChange={cambiado} defaultValue={articulo.contenido} />
        </div>

        <div className='form-group'>
          <label htmlFor='file'>Imagen</label>
          <div className='mascara'>
            {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen}></img>}
            {articulo.imagen == "default.png" && <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s'></img>}
          </div>
          <input type='file' name='file' id='file' />
        </div>

        <input type='submit' value="Guardar" className='btn btn-success' />

      </form>

    </div>
  )
}
