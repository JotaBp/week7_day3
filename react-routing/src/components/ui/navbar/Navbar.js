import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const navbar = () => {
    return (
        <nav className="menu">
            <ul>
                <li><NavLink to="/" activeStyle={{ fontWeight: 'bold', color: 'red' }} exact>Inicio</NavLink></li>
                <li><NavLink to="/about" activeStyle={{ fontWeight: 'bold', color: 'red' }}>Sobre mi</NavLink></li>
                <li><NavLink to="/projects" activeStyle={{ fontWeight: 'bold', color: 'red' }}>Proyectos</NavLink></li>
                <li><NavLink to="/profile" activeStyle={{ fontWeight: 'bold', color: 'red' }}>Mi perfil</NavLink></li>
            </ul>
        </nav>
    )
}

export default navbar;