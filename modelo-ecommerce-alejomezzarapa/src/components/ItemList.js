import { useEffect, useState } from "react";
import { item } from "./Item";
import ItemCard from "./ItemCard";
import LoadingGif from "./loading/LoadingGif";

const ItemList = () => {
  
    const [items, setItems] = useState ([])
    const [loading, setLoading] = useState (true)

    useEffect ( () => {
        getItems().then (data => {
            setItems(data)
            console.log(data)
            setLoading (false)
        })
    }, [])
        
    const getItems = () => { 
        return new Promise ( (resolve, reject) => {
            setTimeout ( () => {
                resolve(item)
            }, 2000)
        })
    }
  
    return (
        <div className="flex"> 
            { loading ? 
                <LoadingGif/>
            :
                items.map( item => <ItemCard key={item.id} itemData = {item}/> )    
            }
        </div>
  )
}

export default ItemList

