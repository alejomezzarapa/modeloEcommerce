import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from './context/CartContext'
import {ItemCount} from './ItemCount'

const ItemCard = ({itemData}) => {
  
  const {addSeleccionados} = useContext(CartContext)
  const {addOn} = useContext(ItemCount)       

  return (
    <>  
    <div className="mx-3 card  w-1/3 bg-base-100 shadow-xl">
        <Link to={itemData.linkData}>
            <figure><img className="h-56 w-full" src={itemData.pictureUrl} alt=""/></figure>
                <div className="card-body pl-1">
                <h2 className="card-title font-semibold">
                    {itemData.title}
                </h2>
                <div className="badge badge-secondary">{itemData.price}</div>
                    <p>{itemData.description}</p>
                </div>
        </Link>
        <button onClick={()=>{addSeleccionados(itemData.id)}} className='bg-slate-500 text-slate-200 font-semibold m-2 p-1 rounded-sm'> Subir al carrito </button>      
        <button onClick={()=>{addOn(itemData.id)}} className='bg-slate-500 text-slate-200 font-semibold m-2 p-1 rounded-sm'> Comprar </button>                    
    </div>
    </>
    )
}

export default ItemCard