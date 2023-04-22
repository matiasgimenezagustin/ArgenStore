import React from 'react'
import './App.css'
import ItemListContainer from './Components/ItemListContainer/ItemListContainer'
import Navbar from './Components/Navbar/Navbar'

const App = () => {
  

  return (
    <div>
      <Navbar/>
      <ItemListContainer greeting={"Bienvienidos a Argenstore"}/>
    </div>
  )
}

export default App
