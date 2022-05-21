import React from 'react';
import CartContextProvider from './components/context/CartContext';
import AppRouter from './Routes/AppRouter';
import './App.css';

function App() {

  return (
    <>
      <CartContextProvider>
        <AppRouter/>
      </CartContextProvider>
    </>
    );
}

export default App;
