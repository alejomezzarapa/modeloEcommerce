import React from 'react'
import { Link } from 'react-router-dom'

const ItemCard = ({itemData}) => {
  return (
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
    </div>
    )
}

export default ItemCard