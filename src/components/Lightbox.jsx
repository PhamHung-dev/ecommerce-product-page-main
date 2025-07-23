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
    <div className="lightbox-hidden" style={{ display: showLightbox ? 'flex' : 'none' }}>
    <div className="lightbox-content">
        <div className="close-lightbox" onClick={closeLightbox}>
            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="currentColor" fillRule="evenodd"/>
            </svg>
        </div>

        <img src={mainImages[activeIndex]} className="lightbox-image" alt="lightbox-mainImage"/>
        <div className="next" onClick={handleNext}>
            <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/>
            </svg>
        </div>
        <div className="prev" onClick={handlePrev}>
            <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd"/>
            </svg>
        </div>

        <div className="lightbox-thumbnails">
            {thumbnails.map((thumb, index) => (
                <div key={index}
                     className={`lightbox-thumbnail-wrapper ${index === activeIndex ? 'active' : ''}`}
                     onClick={() => setActiveIndex(index)}>
                    <img src={thumb} data-index="1" alt={`lightboxThumbnail${index}`}/>
                </div>
            ))}
        </div>
    </div>
    </div>
  );
}

export default Lightbox;