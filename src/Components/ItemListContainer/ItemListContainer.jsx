import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css"

import Item from '../Item/Item'

import { useParams } from 'react-router-dom'
import {collection, getDocs, query, where} from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

const ItemListContainer = ({greeting}) => {
  const [currentProducts, setCurrentProducts] = useState([])
  const [loader, setLoader] = useState(false)
  const {categoryId} = useParams()



  useEffect(()=>{
    const action = categoryId ? query(collection(db, 'productos'), where('categoria', '==', categoryId)): collection(db, 'productos')
    getDocs(action).then(res => {
      
      const nuevosProductos = res.docs.map( doc => {
              
        const data = doc.data()
        
        
        return {id:doc.id, ...data}
      })
      setCurrentProducts(nuevosProductos)
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