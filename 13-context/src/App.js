import React, { useEffect, useState } from 'react'
import './App.css';
import { AppRouter } from './routing/AppRouter';
import { PruebaContext } from './context/PruebaContext';

function App() {

  const [usuario, setUsuario]= useState({});


  useEffect(() => {
    let usuario_local = JSON.parse(localStorage.getItem("usuario"));

    setUsuario(usuario_local);
  },[]);

  useEffect(() => {
    localStorage.setItem("usuario", JSON.stringify(usuario))
  },[usuario]);

  const curso = {
    id: 1,
    titulo: "Master en Typescript",
    contenido: "Muchas horas de contenido"
  }

  return (
    <div className="App">


      <PruebaContext.Provider value={{
        usuario,
        setUsuario
      }}>
        <AppRouter />
      </PruebaContext.Provider>



    </div>
  );
}

export default App;
