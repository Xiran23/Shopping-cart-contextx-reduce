import React from 'react'
import {Link , NavLink} from "react-router-dom"

import "./Header.css"
// import Logo from "../assets/images/logo.png"
import Logo from "../assets/images/logo.png"
import { useCart } from '../context/CartContext'




export const Header = () => {
  const {cartList} =useCart();
  return (
   <header>
    <Link to = "/" className = "logo">
    <img src= {Logo} alt="shopmate Logo"></img>  
        <span>SHopping cart</span>
    </Link>


    <nav>
      <NavLink to="/" className="link" end>Home</NavLink>
      <NavLink to="/Cart" className="link">Cart</NavLink>
    </nav>


    <Link to = "/cart" className = "items">
    
        <span>Cart:{cartList.length}</span>
    </Link>


   </header>


  )
}
