import React from 'react'
import "./Navbar.css"
import CartWidget from '../CartWidget/CartWidget'
const Navbar = () => {
  return (
    <header>
        <h2>Argenstore</h2>
        <nav>
            <a href="">Celulares</a>
            <a href="">Computadoras</a>
            <a href="">Audio</a>
            <a href="">Televisiones</a>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default Navbar