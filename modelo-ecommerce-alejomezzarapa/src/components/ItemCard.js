import React from 'react'

const ItemCard = ({itemData}) => {
  return (
    <div className=" card w-1/3 h-1/3 bg-base-100 shadow-xl">
        <figure><img src={itemData.pictureUrl} alt=""/></figure>
        <div className="card-body">
            <h2 className="card-title">
                {itemData.title}
                <div className="badge badge-secondary">{itemData.price}</div>
            </h2>
        <p>{itemData.description}</p>
        </div>
    </div>
    )
}

export default ItemCard