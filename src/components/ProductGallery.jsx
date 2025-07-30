import React from "react";

import mainImage1 from "../assets/images/image-product-1.jpg";
import mainImage2 from "../assets/images/image-product-2.jpg";
import mainImage3 from "../assets/images/image-product-3.jpg";
import mainImage4 from "../assets/images/image-product-4.jpg";

import thumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

const mainImages = [mainImage1, mainImage2, mainImage3, mainImage4];
const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4];

function ProductGallery({activeIndex, setActiveIndex, setShowLightbox}) {

    const handleMainImageClick = () => {
        setShowLightbox(true);  // bật lightbox
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev < mainImages.length - 1 ? prev + 1 : prev));
    }

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }

   return (
    <div className="relative flex-1 flex flex-col item-center gap-6">
        <div className="lg:w-[75%] w-full lg:h-full h-[19rem] lg:mt-4 mt-0 lg:rounded-2xl overflow-hidden bg-green-500">
            <img
                src={mainImages[activeIndex]}
                alt="Main Shoe"
                className="cursor-pointer w-full h-full object-cover pointer-events-none lg:pointer-events-auto"
                onClick={handleMainImageClick}/>
        </div>
        <div className="hidden lg:flex gap-[1.7rem] mt-4 w-[75%]">
            {thumbnails.map((thumb, index) => (
                <div key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`
                        w-[5.1rem] h-[5.1rem] rounded-xl cursor-pointer relative
                        overflow-hidden box-border transition-all duration-200
                        ${index === activeIndex
                            ? 'border-2 border-orange-500 bg-white/70'
                            : 'border-2 border-transparent'}`}
                >
                    {index === activeIndex && (
                        <div className="absolute inset-0 bg-white/50 z-10 rounded-xl pointer-events-none"></div>
                    )}
                    <img src={thumb} data-index="1"
                        alt={`thumbnail${index}`}
                        className="w-full h-full object-cover rounded-lg z-0 block"/>
                </div>
            ))}
        </div>

        <div className="lg:hidden absolute top-1/2 -translate-y-1/2 right-4 w-10 h-10 bg-white text-black flex
            items-center justify-center rounded-full cursor-pointer hover:text-orange-500"
            onClick={handleNext}
        >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/>
            </svg>
        </div>
        <div className="lg:hidden absolute top-1/2 -translate-y-1/2 left-4 w-10 h-10 bg-white text-black flex top-1/2 -translate-y-1/2
            items-center justify-center rounded-full cursor-pointer hover:text-orange-500"
            onClick={handlePrev}
        >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/>
            </svg>
        </div>
    </div>
  );
}

export default ProductGallery;