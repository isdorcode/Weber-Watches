'use client';

import React, { useEffect, useState } from 'react';

const Cart = () => {
  const [cart, setCart] = useState({});

  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cart')) || {};
    setCart(savedCart);
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
