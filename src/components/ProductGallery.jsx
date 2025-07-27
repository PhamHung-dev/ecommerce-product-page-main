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

   return (
    <div className="flex-1 flex flex-col item-center gap-6">
        <img
            src={mainImages[activeIndex]}
            alt="Main Shoe"
            className="w-[75%] mt-4 rounded-2xl cursor-pointer"
            onClick={handleMainImageClick}/>
        <div className="flex gap-[1.7rem] mt-4 w-[75%]">
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
    </div>
  );
}

export default ProductGallery;