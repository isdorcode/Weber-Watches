"use client"

import React, { useState } from "react";

type Watch = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  description: string;
  stock: number;
};

const watches: Watch[] = [
  {
    id: 1,
    name: "Plain Silicon",
    price: 69.9,
    image: "/white.png",
    category: "Basic",
    description: "Sleek and simple silicon watch for everyday use",
    stock: 10,
  },
  {
    id: 2,
    name: "Elegant Metal",
    price: 150,
    image: "/metal.png",
    category: "Luxury",
    description: "Elegant metal watch for formal occasions",
    stock: 5,
  },
  {
    id: 3,
    name: "Adventure Gear",
    price: 120,
    image: "/rugged.png",
    category: "Rugged",
    description: "Durable watch for outdoor activities",
    stock: 7,
  },
];

type CartItem = {
  id: number;
  quantity: number;
};

const Popular: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (watchId: number) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === watchId);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === watchId
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { id: watchId, quantity: 1 }];
      }
    });
  };

  return (
    <div className="popular-section">
      <h2 className="section-title">Popular Watches</h2>
      <div className="watch-list">
        {watches.map((watch) => (
          <div className="watch-item" key={watch.id}>
            <img src={watch.image} alt={watch.name} className="watch-image" />
            <h3 className="watch-name">{watch.name}</h3>
            <p className="watch-description">{watch.description}</p>
            <p className="watch-price">${watch.price.toFixed(2)}</p>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(watch.id)}
              disabled={watch.stock === 0}
            >
              {watch.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Cart Summary</h2>
        {cart.length > 0 ? (
          <ul>
            {cart.map((item) => {
              const watch = watches.find((w) => w.id === item.id);
              return (
                <li key={item.id}>
                  {watch?.name} - Quantity: {item.quantity}
                </li>
              );
            })}
          </ul>
        ) : (
          <p>Your cart is empty.</p>
        )}
      </div>
    </div>
  );
};

export default Popular;
