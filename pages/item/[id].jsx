import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Items from '../../components/Items'
import SideInfo from '../../components/itemdetails/SideInfo'
import Showcase from '../../components/itemdetails/Showcase'
import Description from '../../components/itemdetails/Description'
import Detail from '../../components/itemdetails/Detail'

const ItemDetails = () => {
    const router = useRouter();
    const { id } = router.query;
    const [item, setItem] = useState(null);
    const [items, setItems] = useState([]);

    async function getItem() {
        const item = await fetch(
            `http://localhost:1337/api/items/${id}?populate=*`,
            { method: 'GET' }
        );

        const itemJson = await item.json();
        setItem(itemJson.data);
    }

    const getItems = async () => {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=image",
            { method: "GET" }
        );
        const itemJson = await items.json();
        setItems(itemJson.data);
    }

    // const filteredItems = items.filter((item) => item.id !== id)

    useEffect(() => {
        if (router.isReady) {
            getItem();
            getItems();
            // setItems(items.filter((item) => (id !== `${item.id}`)))
        }
    }, [id, router.isReady])

    return (
        <>
            <div className='mt-16  w-full md:w-[calc(100%-400px)] p-5 md:p-10 font-cinzel'>
                <SideInfo item={item} />
                <Showcase item={item} />
                <Description item={item} />
                <Detail />
                <h3 className='text-3xl font-bold mb-3'>You May Also Like</h3>
                <div className='flex overflow-x-scroll gap-10 p-3 mb-16 md:pb-10 verticle'>
                    {items.map((item, i) => {
                        if (id !== `${item.id}`) {
                            return <Items item={item} key={`${item.name}-${i}`} />
                        }
                    })}
                </div>
            </div>
        </>
    )
}

export default ItemDetails