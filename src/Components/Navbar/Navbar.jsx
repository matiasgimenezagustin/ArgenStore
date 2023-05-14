import React from 'react'
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <header>
        <NavLink to={"/"}>
          <h2>Argenstore</h2>
        </NavLink>
        
        <nav>
          <NavLink to={"/category/celulares"}>
            Celulares
          </NavLink>
          <NavLink to={"/category/computadoras"}>
            Computadoras
          </NavLink>
          <NavLink to={"/category/audio"}>
            Audio
          </NavLink>
          <NavLink to={"/category/televisiones"}>
            Televisiones
          </NavLink>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default Navbar