import React from 'react'
import ItemList from '../ItemList'

const ItemListContainer = () => {
  return (
    <div>
      <div className="'m-8 text-3xl text-center font-bold text-blue-800'">Bienvenido a ClickApp</div>
      <div className="flex-auto"><ItemList></ItemList></div>
    </div>
    )
}

export default ItemListContainer