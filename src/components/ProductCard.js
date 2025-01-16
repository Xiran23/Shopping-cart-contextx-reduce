import React, { useEffect, useState } from 'react'
import "./ProductCard.css"
import {useCart} from "../context/CartContext"
export const ProductCard = ({product}) => {

const {addTocart,cartList,removeFromCart} = useCart();
const { id , name , price,image} = product;
const [isIncart,setIsInCart] = useState(false);

// function handleAdd(){
// addTocart(product);
// console.log(cartList);
// }
useEffect(()=>{
  const productIsInCart = cartList.find(cartItem => cartItem.id === id)
  if(productIsInCart){
    setIsInCart(true)

  }else{
    setIsInCart(false)
  }
},[cartList,id])

  return (
    <div className='productCard' key={product.id}>
      {image}

      <img src={image} alt=""/>
      <p className="name">{name}</p>
      <div className="action">{price}</div>
      <p></p> 
      {isIncart?(
        
        <button className="remove"  onClick={()=>removeFromCart(product)}>Remove</button>
      ):(
        <button  onClick={()=>{addTocart(product)} }>Add to cart</button>
      )}


    </div>
  )
}
