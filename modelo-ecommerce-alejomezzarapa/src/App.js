import React from 'react';
import AppRouter from './Routes/AppRouter';
import './App.css';
import CartContextProvider from './components/context/CartContext';
import ItemCountProvider from './components/ItemCount';

function App() {

  return (
    <>
      <CartContextProvider>
        <ItemCountProvider>
          <AppRouter/>
        </ItemCountProvider>
      </CartContextProvider>
    </>
    );
}

export default App;
