import React from 'react'
import { NavLink } from 'react-router-dom'

export const HeaderNav = () => {

    
  return (
    <header className='header'>
        <div className='logo'>
            <span>I</span>
            <h3>Isaías Navarrete WEB</h3>
        </div>
        
        <nav>
            <ul>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/inicio'>Inicio</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/portafolio'>Portafolio</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/servicios'>Servicios</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/curriculum'>Curriculum</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive}) => isActive ? 'active' : ''} to='/contacto'>Contacto</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}
