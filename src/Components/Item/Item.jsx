import React from 'react'
import "./item.css"
import { Link } from 'react-router-dom'
const Item = ({product}) => {
  return (
    <div className='item'>
        <h2>{product.nombre}</h2>
        <img src={product.imagen}/>
        <p>{product.descripcion}</p>
        <Link to={'/item/' + product.id}><button className='btn-more'>Ver Mas</button></Link>
    </div>
  )
}

export default Item