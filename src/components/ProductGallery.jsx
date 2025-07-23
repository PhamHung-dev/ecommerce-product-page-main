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
    <div className="product-gallery">
        <img src={mainImages[activeIndex]} alt="Main Shoe" className="main-image" onClick={handleMainImageClick}/>
        <div className="thumnail-row">
            {thumbnails.map((thumb, index) => (
                <div key={index}
                     className={`thumbnail-wrapper ${index === activeIndex ? 'active' : ''}`}
                     onClick={() => setActiveIndex(index)}>
                    <img src={thumb} data-index="1" alt={`thumbnail${index}`}/>
                </div>
            ))}
        </div>
    </div>
  );
}

export default ProductGallery;