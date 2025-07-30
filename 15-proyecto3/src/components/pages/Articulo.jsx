import React, { useEffect, useState } from 'react'
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';
import { useParams } from 'react-router-dom';



export const Articulo = () => {

  const [articulo, setArticulo] = useState([]);
  const [cargando, setCargando] = useState(true);
  const params = useParams();

  useEffect(() => {

    conseguirArticulo();
  }, []);

  const conseguirArticulo = async () => {

    const { datos, cargando } = await Peticion(Global.url + "articulo/" + params.id, "GET")

    // let peticion = await fetch(url, {
    //   method: "GET"
    // });
    // let datos = await peticion.json();
    if (datos.status === "success") {
      setArticulo(datos.articulo);
    } else {
      //nada
    }

    setCargando(false);
  }

  return (
    <>

      {cargando ? "Cargando..." :

        (
          <div className='jumbo'>
            <div className='mascara'>
              {articulo.imagen != "default.png" && <img src={Global.url + "imagen/" + articulo.imagen}></img>}
              {articulo.imagen == "default.png" && <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHnJDLOcdm_0b6N6kNj-1OvO9KhKYgqIy0w&s'></img>}
            </div>
            <h1>{articulo.titulo}</h1>
            <span>{articulo.fecha}</span>
            <p>{articulo.contenido}</p>w
          </div>

        )

      }
    </>
  )
}
