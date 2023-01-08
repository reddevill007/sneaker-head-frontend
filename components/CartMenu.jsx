import { useSelector, useDispatch } from 'react-redux'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from 'react-icons/ai'
import { decreaseCount, increseCount, removeFromCart, setIsCartOpen } from '../store'
import { useRouter } from 'next/router'

const CartMenu = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart.cart)
    const isCartOpen = useSelector((state) => state.cart.isCartOpen)

    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.attributes.price;
    }, 0);

    return (

        <div className={`${isCartOpen ? 'block' : 'hidden'} fixed z-10 w-full h-full left-0 top-0 overflow-auto`}>
            {/* MODAL */}
            <div className='fixed p-10 right-0 bottom-0 w-[400px] bg-white overflow-y-scroll h-full z-20'>
                <div className='flex justify-between items-center mb-4'>
                    {/* CART HEADER */}
                    <h3>SHOPPING CART ({cart.length})</h3>
                    <div onClick={() => dispatch(setIsCartOpen({}))}>
                        <AiOutlineClose />
                    </div>
                </div>

                {/* CART LIST */}
                <div>
                    {cart.map((item) => (
                        <div key={`${item.attributes.name}-${item.id}`}>
                            <div className="flex py-4 justify-between items-center">
                                <div className='flex-2'>
                                    <img alt={item?.name} height="123px" width="164px" src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.medium?.url}`} />
                                </div>
                                <div className="flex-3">
                                    <div className="flex justify-between items-center mb-2">
                                        <h2>{item.attributes.name}</h2>
                                        <div onClick={() => dispatch(removeFromCart({ id: item.id }))}>
                                            <AiOutlineClose />
                                        </div>
                                    </div>
                                    <p className='p-3'>{item.attributes.shortDescription}</p>
                                    <div className="flex justify-between items-center my-4">
                                        <div className="flex items-center border">
                                            <div onClick={() => dispatch(decreaseCount({ id: item.id }))}>
                                                <AiOutlineMinus />
                                            </div>
                                            <p>{item.count}</p>
                                            <div onClick={() => dispatch(increseCount({ id: item.id }))}>
                                                <AiOutlinePlus />
                                            </div>
                                        </div>
                                        {/* Price */}
                                        <p>${item.attributes.price}</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ACTIONS */}
                <div className="flex justify-between items-center">
                    <p>SUBTOTAL</p>
                    <p>${totalPrice}</p>
                </div>
                <button
                    className='bg-gray-600 min-w-full px-10 py-5 my-5'
                    onClick={() => {
                        router.push('/checkout')
                        dispatch(setIsCartOpen({}))
                    }}
                >
                    CHECKOUT
                </button>
            </div>
        </div >
    )
}

export default CartMenu