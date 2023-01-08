import React from 'react'

const Description = ({ item }) => {
    return (
        <div className='mt-10 font-cinzel'>
            <h2 className='text-xl font-bold mb-3'>Description</h2>
            <div className='flex justify-center flex-col items-center gap-7'>
                <div>
                    <h2 className='text-lg font-bold mb-3'>THE ICONIC {item?.attributes?.name} MOVES FORWARD WITH AN ENTIRELY VEGAN DESIGN</h2>

                    <p>{item?.attributes?.shortDescription}</p>
                </div>
                <img className='w-[calc(100%/3)] gap-4 rounded-full' src={`http://localhost:1337${item?.attributes?.sub_img2?.data?.attributes?.formats?.large?.url}`} alt={item?.name} />
            </div>
        </div>
    )
}

export default Description