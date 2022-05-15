import React, {children, createContext, useState } from 'react'

export const CartContext = createContext ({
    seleccionados: [],
    addSeleccionados: () => {}, 
})

const CartContextProvider = ({children}) => {

    const [seleccionados, setSeleccionados] = useState([])
    
    const addSeleccionados = (itemId) => {
        setSeleccionados (currentSeleccionados => {    
            return currentSeleccionados.concat(itemId)
        }) 
    }

    const context = {
        seleccionados,
        addSeleccionados,
    }

    return (
        <CartContext.Provider value={context}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider