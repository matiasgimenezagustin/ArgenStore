import React from 'react'
import "./ItemListContainer.css"
const ItemListContainer = ({greeting}) => {
  return (
    <main className='itemListContainer'>
        <h1>{greeting}</h1>
    </main>
  )
}

export default ItemListContainer