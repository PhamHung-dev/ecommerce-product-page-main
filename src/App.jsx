import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import Lightbox from "./components/Lightbox";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    console.log("Cart updated:", cartProducts);
  }, [cartProducts]);

  return (
    <div className="w-full lg:w-[70%] lg:mx-auto">
      <Header
        cartProducts={cartProducts}
        showCart={showCart}
        setShowCart={setShowCart}/>
      <main className="flex flex-col lg:flex-row flex-wrap lg:gap-8 gap-0 lg:px-8 lg:py-20">
        <ProductGallery
          activeIndex={activeIndex} 
          setActiveIndex={setActiveIndex}
          setShowLightbox={setShowLightbox}
        />
        <ProductInfo
          cartProducts={cartProducts}
          setCartProducts={setCartProducts}
        />
      </main>
      <Lightbox 
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        showLightbox={showLightbox}
        setShowLightbox={setShowLightbox}/>
    </div>
  );
}

export default App;