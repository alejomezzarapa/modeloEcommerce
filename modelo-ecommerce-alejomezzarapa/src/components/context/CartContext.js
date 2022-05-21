import React, {createContext, useState } from 'react'

export const CartContext = createContext(null);

const CartContextProvider = (props) => {

    const [seleccionados, setSeleccionados] = useState([])
    
    const addSeleccionados = (item, q) => {
        
        if (seleccionados.some (el => el.id === item.id)){
            let index = seleccionados.findIndex (el => el.id ===item.id);
            let product = seleccionados[index];
            product.q = product.q + q; 

            const newSeleccionados = [...seleccionados];
            newSeleccionados.splice (index, 1, product);

            setSeleccionados([...newSeleccionados]);
        
        }else{
            let product = { ...item, q}
            setSeleccionados([...seleccionados, product])
        } 
    }

    const deleteSeleccionadosById = ( id ) => {
        const newSeleccionados = [...seleccionados];
        let index = newSeleccionados.findIndex(el => el.id === id);
        
        newCart.splice( index, 1 );

        setSeleccionados([...newSeleccionados]);
    }

    const deleteSeleccionados = () => {
        setSeleccionados([]);
    }

    const context = {
        seleccionados,
        setSeleccionados,
        addSeleccionados,
        deleteSeleccionados,
    }

    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContextProvider