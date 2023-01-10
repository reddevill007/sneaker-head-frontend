import React from 'react'

const Detail = () => {
    return (
        <div>
            <h2 className='text-2 xl font-bold mb-3'>Details</h2>
            <div>
                <ul className='flex justify-between flex-wrap list-disc p-5 gap-y-4'>
                    <li className='w-full md:w-[40%]'>Lace closure</li>
                    <li className='w-full md:w-[40%]'>Color: Cloud White / Core Black / Gum</li>
                    <li className='w-full md:w-[40%]'>Synthetic upper made with minimum 50% recycled materials</li>
                    <li className='w-full md:w-[40%]'>Product code: H01878</li>
                    <li className='w-full md:w-[40%]'>Rubber outsole.</li>
                </ul>
            </div>
            <div className='mb-10'>
                <div className='flex justify-center items-center w-full'>
                    <div className='bg-black text-white w-1/2 border p-4 border-gray-700 text-center border-b-0'>Attribute</div>
                    <div className='bg-black text-white w-1/2 border p-4 border-gray-700 text-center border-l-0 border-b-0'>Values</div>
                </div>
                <div className='flex justify-center w-full'>
                    <div className='bg-white text-black w-1/2 border p-4 border-gray-700 text-center border-b-0'>Name and Address of Importer</div>
                    <div className='bg-gray-200 text-black w-1/2 border p-4 border-gray-700 text-center border-l-0 border-b-0'>Sneaker Head India Marketing Private Limited, Office no. 6, 2nd Floor, Sector-B, Pocket no. 7, Plot no. 11, Vasant Kunj, New Delhi - 110070</div>
                </div>
                <div className='flex justify-center w-full'>
                    <div className='bg-white text-black w-1/2 border p-4 border-gray-700 text-center border-b-0'>Net Quantity</div>
                    <div className='bg-gray-200 text-black w-1/2 border p-4 border-gray-700 text-center border-l-0 border-b-0'>One Pair</div>
                </div>
                <div className='flex justify-center w-full'>
                    <div className='bg-white text-black w-1/2 border p-4 border-gray-700 text-center border-b-0'>Gender</div>
                    <div className='bg-gray-200 text-black w-1/2 border p-4 border-gray-700 text-center border-l-0 border-b-0'>Male</div>
                </div>
                <div className='flex justify-center w-full'>
                    <div className='bg-white text-black w-1/2 border p-4 border-gray-700 text-center'>Country of Origin</div>
                    <div className='bg-gray-200 text-black w-1/2 border p-4 border-gray-700 text-center border-l-0'>India</div>
                </div>
            </div>
        </div>
    )
}

export default Detail