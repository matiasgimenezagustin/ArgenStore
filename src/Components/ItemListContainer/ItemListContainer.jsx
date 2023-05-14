import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"

import Item from '../Item/Item'
import { getProductsByCategoria, getProducts } from '../../../asyncMockup'
import { useParams } from 'react-router-dom'


const ItemListContainer = ({greeting}) => {
  const [currentProducts, setCurrentProducts] = useState([])
  const [loader, setLoader] = useState(false)
  const {categoryId} = useParams()
  useEffect(()=>{
    setLoader(false)
    categoryId 
    ? 
    getProductsByCategoria(categoryId).then(res => {
      setCurrentProducts(res)
      setLoader(true)
    })
    :
    getProducts().then(res => {
      setCurrentProducts(res)
      setLoader(true)
    })
   
  }, [categoryId])
  return (
    <main className='itemListContainer'>
      {
        loader ?
        <>
          <h1>{greeting}</h1>
          <div className='itemsContainer'>
            {currentProducts.map((product ) =><Item key={product.id} product={product}/> )}
          </div>
        </>
        :
        <h1>Cargando...</h1>
      }
        
    </main>
  )
}

export default ItemListContainer