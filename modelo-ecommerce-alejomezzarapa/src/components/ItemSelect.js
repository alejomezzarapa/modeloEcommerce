import { useContext } from 'react'
import { CartContext } from './context/CartContext'

let cantidad = -2;
let comprar = false;

const funSumar = (q) => {
  cantidad = cantidad + q; 
  return cantidad
}

let ItemSelect = () => {
    const {seleccionados} = useContext(CartContext)
    funSumar(0.5)

    return (
      <>
        <div className='bg-slate-500 text-slate-200 font-semibold m-5 p-1 rounded-sm w-2/6'>
          Subido al carrito: {cantidad} horas del producto 
        </div>
      </>
  )
}

export default ItemSelect