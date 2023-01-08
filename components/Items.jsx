import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { AiOutlineHeart } from 'react-icons/ai'
import { BiShoppingBag } from 'react-icons/bi'
import { MdNavigateNext } from 'react-icons/md'
import { addToCart, addToFav } from '../store'
import { useRouter } from 'next/router'

const Items = ({ item, width }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [count, setCount] = useState(1);
    const [isHovered, setIsHovered] = useState(false);

    const { catagory, price, name, image } = item.attributes;
    const {
        data: {
            attributes: {
                formats: {
                    medium: { url }
                }
            }
        }
    } = image;


    return (
        <div className='min-w-[300px] min-h-[300px] border-black rounded font-fauna border'>
            <div className="relative transition-all duration-1000 w-full h-full" onMouseOver={() => setIsHovered(true)} onMouseOut={() => setIsHovered(false)}>
                <img
                    src={`http://localhost:1337${url}`}
                    alt={item.name}
                    className="rounded w-full h-full object-cover"
                />
                <p className='absolute top-0 left-0 rounded-br rounded-tl bg-blue-500 bg-opacity-50 p-1'>
                    {catagory === 'topRated' ? 'Top Rated' : catagory === 'newArrivals' ? 'New Arrivals' : 'Best Seller'}
                </p>
                <div className={`${isHovered ? 'block' : 'hidden'} absolute h-full rounded bg-black bg-opacity-50 top-0 left-0 w-full px-[5%] flex items-center justify-center`}>
                    <div className="flex justify-center items-center flex-col gap-5 w-[calc(100%-20px)] h-[calc(100%-80px)] bg-blue-900 bg-opacity-50">
                        {/* Amount */}
                        <div className="mt-1">
                            <p>{name}</p>
                            <p>${price}</p>
                            <button onClick={() => router.push(`/item/${item.id}`)}>View item <span className='tracking-[-6px]'>&gt;&gt;</span></button>
                        </div>

                        {/* Button */}
                        <div className='text-2xl absolute w-[220px] flex justify-between items-center h-16 left-10 bottom-10'>
                            <button className='text-white' onClick={() => dispatch(addToCart({ item: { ...item, count } }))}>
                                <BiShoppingBag />
                            </button>
                            <button className='text-white' onClick={() => dispatch(addToFav({ item: { ...item, count } }))}>
                                <AiOutlineHeart />
                            </button>

                        </div>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Items