import React from 'react'
import {useCart} from "../context/CartContext"
import "./CartCards.css";


export const CartCard = ({product}) => {
  const {removeFromCart} = useCart();

    const {name , price , image} = product;
  return (
   <div className="cartCard">
    <img src={image} alt="s" />
    <p className="ProductName">{name}</p>
    <button onClick={()=>removeFromCart(product)}>Remove</button>
    <p className="prodcutPrice">${price}</p>


   </div>
  )
}
