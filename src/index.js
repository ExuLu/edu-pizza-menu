import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import { pizzaData } from './data';

function App() {
  return (
    <div>
      <h1>Hello React!</h1>
      {pizzaData.map((pizza) => (
        <Pizza
          key={pizza.name}
          name={pizza.name}
          ingridients={pizza.ingredients}
          imgSrc={pizza.photoName}
        />
      ))}
    </div>
  );
}

function Pizza({ imgSrc, name, ingridients }) {
  return (
    <div>
      <img height='200px' src={imgSrc} alt='pizza' />
      <h2>{name}</h2>
      <p>{ingridients}</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
