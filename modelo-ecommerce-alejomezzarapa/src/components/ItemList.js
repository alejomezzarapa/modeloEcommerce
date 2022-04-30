import { useEffect, useState } from "react";
import { item } from "./Item";
import ItemCard from "./ItemCard";

const ItemList = () => {
  
    const [items, setItems] = useState ([])
    
    useEffect ( () => {
        const getItems = new Promise ( (resolve, reject) => {
            setTimeout ( () => {
                resolve(item)
            }, 2000)
        })

        getItems.then ( (result) => {
            console.log (result);
        })
        getItems.catch(()=>{
            console.log("error json")
        })

    }, [])
  
    return (
    <div>
        {item.map ( item => <ItemCard key={item.id} itemData = {item}/> )}
    </div>
  )
}

export default ItemList

