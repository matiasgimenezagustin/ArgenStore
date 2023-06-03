import React from 'react'
import { FaShoppingCart } from 'react-icons/fa';
import "./CartWidget.css"
import { useCart } from '../../ContextManager/CartContextProvider';
const CartWidget = () => {
  const {cart} = useCart()
  return (
    <button className='cart-btn'>
        <span className='cart-count'>{cart.length}</span>
        <FaShoppingCart/>
    </button>
  )
}

export default CartWidget