import React from 'react';
import { CartCard } from '../components'; // Adjust the path as needed
import { useTitle } from '../hooks/useTitle';
import { useCart } from '../context/CartContext';

export const Card = () => {
  // const total = 
  const {total,cartList} = useCart()
  console.log(cartList)
  console.log(cartList)
  // const products = [
  //   { id: 1, name: 'Sony Wh-Ch510 Bluetooth Wireless', price: 149, image: '/assets/images/1001.png' },
  //   { id: 2, name: 'boAt Rockerz 450', price: 49, image: '/assets/images/1002.png' }
  // ];

  // Example usage of useTitle hook if needed
  useTitle("Cart");

  return (
    <main>
      <section className="cart">
        <h1>Cart Items: {cartList.length} / {total}</h1>
        {cartList.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};
