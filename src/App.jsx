import React from 'react'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer'
import ErrorPage from './Components/ErrorPage/ErrorPage'
import Cart from './Pages/Cart/Cart'
import CheckOut from './Pages/Checkout/CheckOut'

const App = () => {
 

  return (
    
    <div>
      <Navbar/>
      <Routes>
        <Route element={<ItemListContainer greeting={"Bienvienidos a Argenstore"}/>} path='/' />
        <Route element={<ItemListContainer greeting={"Bienvienidos a Argenstore"}/>} path='/category/:categoryId' />
        <Route element={<ItemDetailContainer/>} path='/item/:id' />
        <Route element={<ErrorPage/>} path='*' />
        <Route element={<Cart/>} path='/cart' />
        <Route element={<CheckOut/>} path='/checkout' />
      </Routes>
      
    </div>
  )
}

export default App
