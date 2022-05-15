import {children, createContext } from 'react';
import { useState } from 'react';

export const ItemCount = createContext ({
    qty: [],
    addOn: () => {}, 
})

const ItemCountProvider = ({children}) => {
  const [qty, setQty] = useState([]);

  const addOn = (num) => {
    setQty (currentQty => {    
        return currentQty.concat(num)
    })
    }

const context = {
    qty,
    addOn,
}

  return (
      <>
        <ItemCount.Provider value={context} >
            {children}
            <button>Terminar tu compra</button>
        </ItemCount.Provider>
     </>  
    );
};

export default ItemCountProvider;