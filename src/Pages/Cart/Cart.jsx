import React from 'react'
import { useCart } from '../../ContextManager/CartContextProvider'
import { Link } from 'react-router-dom'

const Cart = () => {
    const {cart, vaciarCarrito, eliminarProducto} = useCart()
  return (
    <div>
        <h1>Carrito</h1>
        {
            cart.length > 0
            ?
            cart.map(product => (
                <div key={product.id}>
                    <h2>{product.nombre}</h2>
                    <p>Cantidad: {product.cantidad}</p>
                    <button className='btn-more' onClick={() => eliminarProducto(product.id)}>X</button>
                </div>
            ))
            :
            <h2>Aun no has comprado nada...</h2>
        }


        {
            cart.length > 0 && (
                <div>
                    <button onClick={() => vaciarCarrito()} className='btn-more'>Vaciar Carrito</button>
                    <button className='btn-more' ><Link to={'/checkout'}>Ir al checkout</Link></button>
                </div>
            )
        }
    </div>
  )
}

export default Cart