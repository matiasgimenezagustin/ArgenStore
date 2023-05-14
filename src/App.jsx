import React from 'react'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
 

  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<ItemListContainer greeting={"Bienvienidos a Argenstore"}/>} path='/' />
        <Route element={<ItemListContainer greeting={"Bienvienidos a Argenstore"}/>} path='/category/:categoryId' />
        <Route element={<ItemDetailContainer/>} path='/item/:id' />
      </Routes>
      
    </div>
  )
}

export default App
