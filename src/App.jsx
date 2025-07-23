import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductGallery from "./components/ProductGallery";
import ProductInfo from "./components/ProductInfo";
import Lightbox from "./components/Lightbox";

import "./styles/web_layout.css";
import "./styles/lightbox_hidden.css";
import "./styles/cart_drop.css";

function App() {
  const [cartProducts, setCartProducts] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  useEffect(() => {
    console.log("Cart updated:", cartProducts);
  }, [cartProducts]);

  return (
    <div className="wrapper">
      <Header
        cartProducts={cartProducts}
        showCart={showCart}
        setShowCart={setShowCart}/>
      <main className="product-page">
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