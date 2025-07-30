import React, { useEffect, useState } from 'react'
import { Global } from '../../helpers/Global';
import { Peticion } from '../../helpers/Peticion';
import { Listado } from './Listado';



export const Articulos = () => {



  const [articulos, setArticulos] = useState([]);
  const [cargando, setCargando] = useState(true);
  useEffect(() => {

    conseguirArticulos();
  }, []);

  const conseguirArticulos = async () => {

    const { datos, cargando } = await Peticion(Global.url + "articulos", "GET")

    // let peticion = await fetch(url, {
    //   method: "GET"
    // });
    // let datos = await peticion.json();
    if (datos.status === "success") {
      setArticulos(datos.articulos);
    } else {
      //nada
    }

    setCargando(false);
  }

  return (
    <>

      {cargando ? "Cargando..." : (
        articulos.length >= 1 ? 
        <Listado articulos={articulos} 
                 setArticulos={setArticulos} /> 
        : <h1>No hay articulos</h1>
      )}
    </>
  )
}
