'use client';

import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState<{ [key: string]: number }>({}); // Explicitly typing the cart state

  useEffect(() => {
    const savedCart = localStorage.getItem('cart'); // Get the cart data from localStorage
    const parsedCart = savedCart ? JSON.parse(savedCart) : {}; // If it's null, fallback to an empty object
    setCart(parsedCart);
  }, []);

  return (
    <div className="container">
      <h2>Your Cart</h2>
      <ul>
        {Object.entries(cart).map(([id, quantity]) => (
          <li key={id}>Product ID: {id}, Quantity: {quantity}</li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;

