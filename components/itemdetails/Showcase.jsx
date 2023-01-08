import React from 'react'

const Showcase = ({ item }) => {
    return (
        <div className="flex items-center justify-between flex-wrap">
            <img className='w-full md:w-[calc(100%/3)] gap-4 aspect-square object-cover' src={`http://localhost:1337${item?.attributes?.image?.data?.attributes?.formats?.large?.url}`} alt={item?.name} />
            <img className='w-full md:w-[calc(100%/3)] gap-4 aspect-square object-cover' src={`http://localhost:1337${item?.attributes?.sub_img?.data?.attributes?.formats?.large?.url}`} alt={item?.name} />
            <img className='w-full md:w-[calc(100%/3)] gap-4 aspect-square object-cover' src={`http://localhost:1337${item?.attributes?.sub_img2?.data?.attributes?.formats?.large?.url}`} alt={item?.name} />
        </div>
    )
}

export default Showcase