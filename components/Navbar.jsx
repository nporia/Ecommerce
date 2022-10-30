import React from 'react';
import Link from 'next/link';
import { AiOutlineShopping } from 'react-icons/ai'
import { toast } from 'react-hot-toast';
import { Cart } from './';
import { useStateContext} from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();
  const func = () => {
    toast.success(`No orders yet! Make your first order and get 10% off on next order`);
  } 
  return (
    
    
    <div className="navbar-container">
      <p className="logo">
        <Link href="/">BLINKART</Link>
      </p>
  
<div class="container">
  <div class="searchInputWrapper">
    <input class="searchInput" type="text" placeholder='Search your favourite product'/>
  </div>
</div>
      <div className = "nav-left"> 
      <p className="logo item">
        <Link href="/">HOME</Link>
      </p>
      <p className="logo item">
        <Link href="/">SHOP ALL</Link>
      </p>
      <p className="logo item">
        <Link href="/">SHOP BY CATEGORY</Link>
      </p>

      
      <button type="button" className="cart-icon " onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>
      <button type="button" className="cart-icon item" onClick={func}>
      <img id = "order-icon" src = "https://icons.veryicon.com/png/o/system/linear-chh/order-27.png"/>
      </button>
      
      {showCart && <Cart />}
      
      </div>
    </div>
  )
}

export default Navbar