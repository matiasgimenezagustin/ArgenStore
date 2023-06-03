import React, { useEffect, useState } from 'react'

import { useParams } from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

const ItemDetailContainer = () => {
  const [currentProduct, setCurrentProduct] = useState({})
  const [loader, setLoader] = useState(false)
  const [error, setError] =  useState(false)
  const {id} = useParams()
  useEffect(()=>{
    const nuevoDocumento = doc(db,"productos", id)
    getDoc(nuevoDocumento)
      .then((res) => {
        const data = res.data()
        !data ? setError(true) : setError(false)
        const nuevoProducto = {id: res.id,...data}
        setCurrentProduct(nuevoProducto)
        setLoader(true)
      
      })
  }, [id])
  return (

    <div>
      {
      error 
      ?
      <h1>Error 404: El producto no existe</h1>
      :
      (
        loader ?
        <ItemDetail currentProduct={currentProduct}/>
        :
        <h2>Cargando...</h2>
        )
      
      } 
      
      
    </div>
  )
}

export default ItemDetailContainer