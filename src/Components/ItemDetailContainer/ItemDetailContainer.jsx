import React, { useEffect, useState } from 'react'
import { getProductById } from '../../../asyncMockup'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const [currentProduct, setCurrentProduct] = useState({})
  const [loader, setLoader] = useState(false)
  const {id} = useParams()
  useEffect(()=>{
    getProductById(id).then(res => {
      setCurrentProduct(res)
      setLoader(true)
    })
  }, [])
  return (

    <div>
      {
        loader ?
        <>
          <h1>{currentProduct.nombre}</h1>
          <img src={currentProduct.imagen}/>
          <h2>Precio: {currentProduct.precio}</h2>
          <h2>Stock: {currentProduct.stock}</h2>
          <p>{currentProduct.descripcion}</p>
          <button className='btn-more'>Agregar al carrito</button>
        </>
        :
        <h2>Cargando...</h2>

      }
      
    </div>
  )
}

export default ItemDetailContainer