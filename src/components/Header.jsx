import React, { useEffect, useRef } from "react";

import lightboxThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../assets/images/icon-delete.svg";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";

function Header({ cartProducts, showCart, setShowCart }) {

  const handleCartClick = () => {
    setShowCart(!showCart); // toggle
  };

  const renderEmptyCart = () => (
    <div className="w-full">
      <h3 className="text-[1.2rem] border-b border-gray-200 px-6 py-4">Cart</h3>
      <div className="text-center py-12 text-gray-500 text-[1.2rem] font-bold">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );

  const renderCartItems = () => (
    <div className="w-full">
      <h3 className="text-[1.2rem] border-b border-gray-200 px-6 py-4">Cart</h3>
      {cartProducts.map((product, index) => (
        <div className="flex items-center gap-4 px-6 py-4" key={index}>
          <img src={lightboxThumbnail1}
              className="w-12 h-12 object-cover rounded-md"
              alt="product thumbnail"
          />
          <div className="flex flex-col justify-center gap-1 flex-grow">
            <p className="text-[1rem] text-gray-800">{product.name}</p>
            <p className="text-gray-500 text-[1rem]">
              $125.00 x {product.quantity}
              <span className="font-bold text-black ml-2"> ${product.quantity * 125}.00</span>
            </p>
          </div>
          <img src={deleteIcon} className="w-4 h-4 cursor-pointer" alt="delete" />
        </div>
      ))}
      <button className="w-[90%] bg-orange-500 text-white font-bold rounded-lg
        px-6 py-4 mx-auto block mt-2 hover:opacity-90 transition">Checkout
      </button>
    </div>
  );

  const cartRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showCart && cartRef.current && !cartRef.current.contains(event.target)) {
        setShowCart(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showCart]);

  return (
    <header className="
            flex justify-between items-center
            py-4 border-b border-gray-400 h-24">
      <div className="flex-1">
        <img src={logo} alt="logo" />
      </div>
      <nav className="flex-[4] flex justify-start gap-12">
        {["Collections", "Men", "Women", "About", "Contact"].map((label, i) => (
          <a href="#"
          key={i}
          className="text-gray-600 text-[1.2rem] no-underline hover:text-black">
          {label}</a>
        ))}
      </nav>
      <div className="flex-1 flex justify-end items-center gap-12 relative">
        <img src={cartIcon} alt="cart" onClick={handleCartClick} className="cursor-pointer"/>
        {showCart && (
          <div className="absolute top-16 right-0 bg-white shadow-lg rounded p-4 w-96 z-10" ref={cartRef}>
            {cartProducts.length === 0 ? renderEmptyCart() : renderCartItems()}
          </div>
        )}
        <img src={avatar} alt="avatar" className="w-12 h-auto rounded-full" />
      </div>
    </header>
  );
}

export default Header;