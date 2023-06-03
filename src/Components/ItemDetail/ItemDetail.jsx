import React from 'react'
import './ItemDetail.css'
import { useCart } from '../../ContextManager/CartContextProvider'
import { Link } from 'react-router-dom'
const ItemDetail = ({currentProduct}) => {
  const [cantidadComprada, setCantidadComprada] = React.useState(0)

  const handleBuyProduct = (product) => {
    setCantidadComprada(cantidadComprada + 1)

  }
  const {addProduct, cart } = useCart()
  console.log(cart)
  return (
    <div>

        <h1>{currentProduct.nombre}</h1>
        <img src={currentProduct.imagen}/>
        <h2>Precio: {currentProduct.precio}</h2>
        <h2>Stock: {currentProduct.stock}</h2>
        <p>{currentProduct.descripcion}</p>
        {
          cantidadComprada > 0 
          ?
          (
            <>
            <div className='controls'>
              <button className='btn-more' onClick={()=>setCantidadComprada( cantidadComprada - 1)}>-</button>
              <p>{cantidadComprada}</p>
              <button className='btn-more' onClick={()=>setCantidadComprada(cantidadComprada + 1)}>+</button>
            </div>
            <button className='btn-more' onClick={()=> addProduct(currentProduct, cantidadComprada)}>
              <Link to={'/cart'}>Confirmar</Link>
            </button>
            </>
          )
          
          : 
          <button className='btn-more' onClick={()=>handleBuyProduct(currentProduct)}>Agregar al carrito</button>
        }
        

    </div>
  )
}

export default ItemDetail