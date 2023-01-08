import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { AiOutlineSearch, AiOutlineUser, AiOutlineMenuFold, AiOutlineShoppingCart } from 'react-icons/ai'

import { setIsCartOpen } from '../store'
import CartMenu from './CartMenu'

const Navbar = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleClick = () => {
        router.push("/");
    }

    const cart = useSelector(state => state.cart.cart)

    return (
        <>
            <div className='flex items-center w-full h-16 bg-white shadow-sm text-black fixed top-0 left-0 z-[1] justify-center'>
                <div className='w-4/5 m-auto flex justify-between items-center'>
                    <div className='hover:cursor-pointer font-cinzel text-gray-700 flex items-center justify-center gap-1 font-bold' onClick={handleClick}>
                        <img src="/favicon.png" alt="logo" className='h-14 w-14 object-contain' /> SNEAKER HEAD
                    </div>
                    <div className='flex justify-between gap-x-5 z-[2]'>
                        <div className='relative cursor-pointer'>
                            <AiOutlineSearch />
                        </div>
                        <div className='relative cursor-pointer'>
                            <AiOutlineUser />
                        </div>
                        <div className='relative cursor-pointer'>
                            {cart.length === 0 ? null : <div className='absolute h-4 right-0 top-[-100%]'>{cart.length}</div>}
                            <AiOutlineShoppingCart onClick={() => dispatch(setIsCartOpen({}))} />
                        </div>
                        <div className='relative cursor-pointer'>
                            <AiOutlineMenuFold />
                        </div>
                    </div>
                </div>
            </div>
            <CartMenu />
        </>
    )
}

export default Navbar