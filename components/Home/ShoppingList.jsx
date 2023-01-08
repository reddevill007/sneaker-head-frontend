import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setItems } from '../../store';
import Items from '../Items'

const ShoppingList = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState("all");
    const items = useSelector(state => state.cart.items);
    console.log("items", items);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    const getItems = async () => {
        const items = await fetch(
            "http://localhost:1337/api/items?populate=*",
            { method: "GET" }
        );
        const itemJson = await items.json();
        dispatch(setItems(itemJson.data));
    }

    useEffect(() => {
        getItems();
    }, []);

    const topRatedItem = items.filter(
        (item) => item.attributes.category === "topRated"
    )

    const newArrivals = items.filter(
        (item) => item.attributes.category === "newArrivals"
    )

    const bestSellers = items.filter(
        (item) => item.attributes.category === "bestSeller"
    )

    return (
        <div className='w-[90%] mx-auto py-20 min-h-screen bg-blue-grass'>
            <h3 className='font-cinzel text-5xl text-center mb-6'>Our <span className='text-orange-600'>Products</span></h3>
            <div className='flex flex-wrap items-center justify-center gap-5'>
                {items.map((item) => (
                    <Items item={item} key={`${item.name}-${item.id}`} />
                ))}
            </div>
        </div>
    )
}

export default ShoppingList