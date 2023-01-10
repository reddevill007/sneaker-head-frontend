import React from 'react'
import { addToCart } from '../../store'
import { useDispatch } from 'react-redux'

import { BsArrowRight, BsSuitHeart, BsTruck } from 'react-icons/bs'
import { RxRulerHorizontal } from 'react-icons/rx'
import { GiReturnArrow } from 'react-icons/gi'

const SideInfo = ({ item }) => {
    const dispatch = useDispatch();
    const count = 1;

    return (
        <>
            <div className='fixed right-0 top-16 h-[calc(100vh-64px)] overflow-y-scroll bg-white w-[400px] text-black p-5 font-cinzel md:block hidden'>
                <div className='flex items-center justify-between w-full mb-3'>
                    <div>Men.Orignal</div>
                    <div>&#9733;4.9</div>
                </div>
                <h2 className='text-3xl font-bold mb-3'>{item?.attributes?.name}</h2>
                <p>MRP in Indian currency:</p>
                <p><span className='font-bold'>₹{item?.attributes?.price}.00</span> per pair</p>
                <p className='mb-4'>(Inclusive of all taxes)</p>
                <p className='mb-10 text-lg'>Cloud White / Core Black / Gum</p>
                <p className='font-bold text-xl mb-4'>Sizes</p>
                <div className='mb-1'>
                    <button className='h-[74] w-14 border py-1'>7</button>
                    <button className='h-[74] w-14 border px-4 py-1'>7.5</button>
                    <button className='h-[74] w-14 px-4 border py-1'>8</button>
                    <button className='h-[74] w-14 border px-4 py-1'>8.5</button>
                    <button className='h-[74] w-14 border px-4 py-1'>9</button>
                    <button className='h-[74] w-14 border px-4 py-1'>9.5</button>
                    <button className='h-[74] w-14 border px-4 py-1'>10</button>
                    <button className='h-[74] w-14 border px-4 py-1'>11</button>
                    <button className='h-[74] w-14 border px-4 py-1'>12</button>
                </div>
                <p className='text-xs flex gap-2 mb-10'><RxRulerHorizontal size={15} /> Size Guide</p>
                <div className='flex justify-between icon mb-9'>
                    <button className='flex items-center justify-between w-4/5 bg-black text-white p-3 relative before:absolute before:border before:border-black hover:text-gray-400 before:w-full before:h-full before:top-1 before:left-1 before:z-[-1]' onClick={() => dispatch(addToCart({ item: { ...item, count } }))}><span>Add to Cart</span><span><BsArrowRight /></span></button>
                    <button className='p-3 border border-black w-12 h-12 flex items-center justify-center'><BsSuitHeart /></button>
                </div>

                <p className='flex items-center gap-1 mb-2'><BsTruck /> <span className='underline underline-offset-2'>FREE SHIPPING FOR ALL ORDERS</span></p>
                <p className='flex items-center gap-1'><GiReturnArrow /> <span className='underline underline-offset-2'>FREE RETURNS</span></p>
            </div>
            <div className='flex justify-between icon fixed left-1/2 bottom-4 w-[90%] translate-x-[-50%] z-10  md:hidden'>
                <button className='flex items-center justify-between w-4/5 bg-black text-white p-3 relative before:absolute before:border before:border-black hover:text-gray-400 before:w-full before:h-full before:top-1 before:left-1 before:z-[-1]' onClick={() => dispatch(addToCart({ item: { ...item, count } }))}><span>Add to Cart</span><span><BsArrowRight /></span></button>
                <button className='p-3 border border-black w-12 h-12 flex items-center justify-center bg-white'><BsSuitHeart /></button>
            </div>
        </>
    )
}

export default SideInfo