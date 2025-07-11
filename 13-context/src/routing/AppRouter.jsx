import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import { Inicio } from '../components/Inicio';
import { Articulo } from '../components/Articulo';
import { Acerca } from '../components/Acerca';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {

  const { usuario, setUsuario } = useContext(PruebaContext);

  return (

    <BrowserRouter>

      <header className='header'>
        <nav>
          <div className='logo'>
            <h2>Aprendiendo React Context</h2>
          </div>
          <ul>
            <li>
              <NavLink to="/">Inicio</NavLink>
            </li>
            <li>
              <NavLink to="/articulos">Articulos</NavLink>
            </li>
            <li>
              <NavLink to="/acerca-de">Acerca de</NavLink>
            </li>
            <li>
              <NavLink to="/contacto">Contacto</NavLink>
            </li>

            {usuario.hasOwnProperty("username") && usuario.username !== null ? (
              <>
                <li>
                  <NavLink to="/">{usuario.username}</NavLink>
                </li>

                <li>
                  <a href="#" onClick={e => {
                    e.preventDefault();
                    setUsuario({});
                  }}>Cerrar sesion</a>
                </li>
              </>


            ) : (
              <li>
                <NavLink to="/login">Identificate</NavLink>
              </li>

            )

            }


          </ul>
        </nav>
      </header>

      <section className='content'>

        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/articulos' element={<Articulo />} />
          <Route path='/acerca-de' element={<Acerca />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={(<div>
            <h1>ERROR ESTA PAGINA NO EXISTE</h1>
          </div>)} />
        </Routes>
      </section>





    </BrowserRouter>

  )
}
