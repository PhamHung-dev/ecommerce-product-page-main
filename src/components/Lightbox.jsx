import React from "react";
import lightboxMainImage1 from "../assets/images/image-product-1.jpg";
import lightboxMainImage2 from "../assets/images/image-product-2.jpg";
import lightboxMainImage3 from "../assets/images/image-product-3.jpg";
import lightboxMainImage4 from "../assets/images/image-product-4.jpg";

import lightboxThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import lightboxThumbnail2 from "../assets/images/image-product-2-thumbnail.jpg";
import lightboxThumbnail3 from "../assets/images/image-product-3-thumbnail.jpg";
import lightboxThumbnail4 from "../assets/images/image-product-4-thumbnail.jpg";

const mainImages = [lightboxMainImage1, lightboxMainImage2, lightboxMainImage3, lightboxMainImage4];
const thumbnails = [lightboxThumbnail1, lightboxThumbnail2, lightboxThumbnail3, lightboxThumbnail4];

function Lightbox({ activeIndex, setActiveIndex, showLightbox, setShowLightbox }) {

    const handleNext = () => {
        setActiveIndex((prev) => (prev < mainImages.length - 1 ? prev + 1 : prev));
    }

    const handlePrev = () => {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
    }

    const closeLightbox = () => setShowLightbox(false);

    return (
    <div className={`${showLightbox ? 'flex' : 'hidden'} fixed inset-0 bg-black/75 z-[998] justify-center items-center`}>
    <div className="relative p-4 rounded-xl max-w-[500px] w-full text-center bg-transparent">
        <div className="absolute -top-9 -right-2 w-16 h-16 flex items-center justify-center
            cursor-pointer text-white hover:text-orange-500"
            onClick={closeLightbox}
        >
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="evenodd"/>
            </svg>
        </div>

        <img src={mainImages[activeIndex]} className="w-full rounded-xl lightbox-image" alt="lightbox-mainImage"/>
        <div className="absolute top-[38%] -right-2 w-12 h-12 bg-white text-black flex
            items-center justify-center rounded-full cursor-pointer hover:text-orange-500"
            onClick={handleNext}
        >
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/>
            </svg>
        </div>
        <div className="absolute top-[38%] -left-2 w-12 h-12 bg-white text-black flex
            items-center justify-center rounded-full cursor-pointer hover:text-orange-500"
            onClick={handlePrev}
        >
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/>
            </svg>
        </div>

        <div className="mt-4 flex justify-center gap-6">
            {thumbnails.map((thumb, index) => (
                <div key={index}
                     className={`relative w-20 h-20 overflow-hidden rounded-md border-2 cursor-pointer
                        ${index === activeIndex
                        ? 'border-orange-500 bg-white/70 rounded-xl'
                        : 'border-transparent'}`}
                     onClick={() => setActiveIndex(index)}
                >
                    {index === activeIndex && (
                        <div className="absolute inset-0 bg-white/50 z-10 pointer-events-none rounded-xl"></div>
                    )}
                    <img src={thumb} data-index="1" alt={`lightboxThumbnail${index}`}/>
                </div>
            ))}
        </div>
    </div>
    </div>
  );
}

export default Lightbox;