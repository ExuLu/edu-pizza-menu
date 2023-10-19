import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { pizzaData } from './data';
import './index.css';

function App() {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className='header'>
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}
function Menu() {
  return (
    <main className='menu'>
      <h2>Our Menu</h2>
      <div className='pizzas'>
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingridients={pizza.ingredients}
            imgSrc={pizza.photoName}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </div>
    </main>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className='footer'>
      {new Date().toLocaleTimeString()} We're currently{' '}
      {isOpen ? 'open' : 'close'}
    </footer>
  );
}

function Pizza({ imgSrc, name, ingridients, price, soldOut }) {
  return (
    <div className={soldOut ? 'pizza sold-out' : 'pizza'}>
      <img src={imgSrc} alt={name} />
      <div>
        <h3>{name}</h3>
        <p>{ingridients}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
