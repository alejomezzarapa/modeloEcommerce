import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { item } from '../Item'
import ItemCard from "../ItemCard";
import ItemCount from '../ItemCount';
import ItemSelect from '../ItemSelect';
import LoadingGif from '../loading/LoadingGif';

const ItemDetailContainer = () => {
    
    const { itemId } = useParams ()
    const [itemInfo, setItemInfo] = useState( {} )
    const [loading, setLoading] = useState (true)
     
    useEffect( () => {

        (async () => {
            const item = await getItemDetail()
            setItemInfo(item)
            setLoading (false)
        }) ()
    },[itemId])

    const getItemDetail = () => {
        return new Promise ((resolve) => {
            setTimeout (() => {
                resolve( item.find( i => i.id == itemId))
            }, 2000);
        })
    }

    return (
        <>
            <ItemSelect/>
                <div>
                    { loading ?
                        <LoadingGif/>
                        :
                        <div>
                            <div className="flex m-4">
                                <ItemCard key={itemInfo.id} itemData = {itemInfo}/>
                                <div className='w-1/2'>
                                    {itemInfo.detalle}
                                </div>    
                            </div>
                        </div>
                    }
                </div>
        </>
    )
}

export default ItemDetailContainer