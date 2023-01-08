import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import Slide1 from "../assets/6.png";
import Slide2 from "../assets/7.png";
import Slide3 from "../assets/14.png";
import Slide4 from "../assets/15.png";
import Slide5 from "../assets/34.png";
import Slide6 from "../assets/35.png";

// const importAll = (r) => r.keys().reduce((acc, item) => {
//     acc[item.replace("./", "")] = r(item);
//     return acc;
// }, {});

const heroTextureImports = [
    {
        "src": Slide1,
        "left": true,
    },
    {
        "src": Slide2,
        "left": false,
    },
    {
        "src": Slide3,
        "left": true,
    },
    {
        "src": Slide4,
        "left": true,
    },
    {
        "src": Slide5,
        "left": false,
    },
    {
        "src": Slide6,
        "left": true,
    },
]

const MainCarousel = () => {

    return (
        <div className="h-screen w-full">
            <Carousel
                autoPlay={true}
                className='h-screen'
                infiniteLoop={true}
                showThumbs={false}
                showIndicators={false}
                showStatus={false}
                renderArrowPrev={(onClickHandler, hasPrev, label) => (
                    <div onClick={onClickHandler} className='text-black absolute top-1/2 left-0 p-1 z-10 cursor-pointer'>
                        <MdNavigateBefore size={40} />
                    </div>
                )}
                renderArrowNext={(onClickHandler, hasNext, label) => (
                    <div onClick={onClickHandler} className='absolute top-1/2 right-0 text-black p-1 z-10 cursor-pointer'>
                        <MdNavigateNext size={40} />
                    </div>
                )}
            >
                {heroTextureImports.map((texture, index) => {
                    return <div key={`carousel-${index}`}>
                        <img src={texture.src.src} className='w-full h-full bg-fixed object-cover' alt={`carousel-${index}`} />
                        <div
                            className={`h-full w-full font-cinzel flex justify-center items-center flex-col rounded-sm gap-2 text-white p-5 absolute top-0 md:mx-auto text-left ${texture.left ? 'left-0' : 'right-0'}  md:max-w-[50%]`}
                        >
                            <p className='text-black text-xl font-medium'>YOU MAY NEED</p>
                            <h1 className='text-black text-6xl font-bold'>Shoes Collection</h1>
                            <p className='text-black text-xl font-medium mb-5'>All shoes are carefully handicrafted</p>
                            <button className='px-7 py-4 border w-[200px] border-black text-black tracking-wider hover:bg-black transition-all duration-200  hover:text-white'>SHOP NOW</button>
                        </div>
                    </div>
                })}
            </Carousel>
        </div>
    )
}

export default MainCarousel