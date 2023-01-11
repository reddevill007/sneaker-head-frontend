import { useState } from 'react'
import Link from 'next/link'
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
        <>
            <Link href={`/item/${item.id}`}>
                <div className='min-w-[300px] w-[300px] h-[300px] min-h-[300px] border-4 rounded font-fauna border relative text-white'>
                    <img
                        src={`http://localhost:1337${url}`}
                        alt={item.name}
                        className="rounded w-full h-full object-cover"
                    />
                    <div className="absolute h-full w-full rounded bg-black bg-opacity-75 top-0 left-0 flex flex-col justify-end gap-2 p-3 pb-5">
                        <p className='text-xl'>{name}</p>
                        <p>
                            {catagory === 'topRated' ? 'Top Rated' : catagory === 'newArrivals' ? 'New Arrivals' : 'Best Seller'}
                        </p>
                    </div>
                    <p className='absolute p-2 bg-blue-500 h-9 rounded bottom-[-18px] left-4 border-4 flex items-center justify-center'>${price}</p>
                </div>
            </Link>
        </>
    )
}

export default Items


        // <div className='min-w-[300px] w-[300px] h-[300px] min-h-[300px] border-black rounded font-fauna border'>
        //     <div className="relative transition-all duration-1000 w-full h-full">
        //         <img
        //             src={`http://localhost:1337${url}`}
        //             alt={item.name}
        //             className="rounded w-full h-full object-cover"
        //         />
        //         <p className='absolute top-0 left-0 rounded-br rounded-tl bg-blue-500 bg-opacity-50 p-1'>
        //             {catagory === 'topRated' ? 'Top Rated' : catagory === 'newArrivals' ? 'New Arrivals' : 'Best Seller'}
        //         </p>
        //         <div className={`${isHovered ? 'block' : 'hidden'} absolute h-full rounded bg-black bg-opacity-50 top-0 left-0 w-full px-[5%] flex items-center justify-center`}>
        //             <div className="flex justify-center items-center flex-col gap-5 w-[calc(100%-20px)] h-[calc(100%-80px)] bg-blue-900 bg-opacity-50">
        //                 {/* Amount */}
        //                 <div className="mt-1">
        //                     <p>{name}</p>
        //                     
        //                     <button onClick={() => router.push(`/item/${item.id}`)}>View item <span className='tracking-[-6px]'>&gt;&gt;</span></button>
        //                 </div>

        //                 {/* Button */}
        //                 <div className='text-2xl absolute w-[220px] flex justify-between items-center h-16 left-10 bottom-10'>
        //                     <button className='text-white' onClick={() => dispatch(addToCart({ item: { ...item, count } }))}>
        //                         <BiShoppingBag />
        //                     </button>
        //                     <button className='text-white' onClick={() => dispatch(addToFav({ item: { ...item, count } }))}>
        //                         <AiOutlineHeart />
        //                     </button>

        //                 </div>
        //             </div>
        //         </div>
        //     </div >
        // </div >
