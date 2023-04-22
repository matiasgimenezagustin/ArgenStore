import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import "./CartWidget.css"
const CartWidget = () => {
  return (
    <button className='cart-btn'>
        <span className='cart-count'>0</span>
        <FaShoppingCart/>
    </button>
  )
}

export default CartWidget