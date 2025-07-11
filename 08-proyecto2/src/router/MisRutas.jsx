import React from 'react'
import { BrowserRouter, Routes, Route, NavLink, Navigate } from "react-router-dom"
import { Inicio } from '../components/Inicio'
import { Portafolio } from '../components/Portafolio'
import { Servicios } from '../components/Servicios'
import { Curriculum } from '../components/Curriculum'
import { Contacto } from '../components/Contacto'
import { HeaderNav } from '../components/layout/HeaderNav'
import { Footer } from '../components/layout/Footer'
import { Proyecto } from '../components/Proyecto'

export const MisRutas = () => {

    return (
        <BrowserRouter>

            <HeaderNav />

            <section className='content'>

                <Routes>
                    <Route path='/' element={ <Navigate to='/inicio' />} />
                    <Route path='/inicio' element={<Inicio />} />
                    <Route path='/portafolio' element={<Portafolio />} />
                    <Route path='/servicios' element={<Servicios />} />
                    <Route path='/curriculum' element={<Curriculum />} />
                    <Route path='/proyecto/:id' element={<Proyecto />} />
                    <Route path='/contacto' element={<Contacto />} />
                    <Route path='*' element={
                        <div className='page'>
                            <h1 className='heading'>Error 404</h1>    
                        </div>
                        } />
                </Routes>

            </section>

            <Footer />
        </BrowserRouter>
    )
}
