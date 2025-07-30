import React, { useState, useEffect, useRef } from "react";

import lightboxThumbnail1 from "../assets/images/image-product-1-thumbnail.jpg";
import deleteIcon from "../assets/images/icon-delete.svg";
import logo from "../assets/images/logo.svg";
import cartIcon from "../assets/images/icon-cart.svg";
import avatar from "../assets/images/image-avatar.png";
import menuIcon from "../assets/images/icon-menu.svg";
import iconClose from "../assets/images/icon-close.svg";

function Header({ cartProducts, showCart, setShowCart }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

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
            py-4 lg:border-b border-gray-400 lg:h-24 h-[4rem]">
      <div className="lg:hidden flex items-center gap-4 ml-6 lg:ml-0">
        <img src={menuIcon} alt="menu icon" onClick={toggleMobileMenu}
          className="cursor-pointer"
        />
      </div>
      <div className="lg:flex-1 flex items-center ml-4">
        <img src={logo} alt="logo" />
      </div>
      <nav className="hidden lg:flex-[4] lg:flex justify-start gap-12">
        {["Collections", "Men", "Women", "About", "Contact"].map((label, i) => (
          <a href="#"
          key={i}
          className="text-gray-600 text-[1.2rem] no-underline hover:text-black">
          {label}</a>
        ))}
      </nav>
      <div className="flex-1 flex justify-end items-center lg:gap-12 gap-4 relative">
        <img src={cartIcon} alt="cart" onClick={handleCartClick} className="cursor-pointer lg:mr-0 mr-4"/>
        {showCart && (
          <div className="lg:absolute fixed lg:top-16 top-20 lg:right-0 lg:left-auto lg:translate-x-0 lg:w-96 lg:h-auto
            h-[17rem] w-[95vw] left-1/2 -translate-x-1/2 bg-white shadow-lg rounded-lg p-4 z-10" ref={cartRef}>
            {cartProducts.length === 0 ? renderEmptyCart() : renderCartItems()}
          </div>
        )}
        <img src={avatar} alt="avatar" className="lg:w-12 w-6 lg:mr-0 mr-6 h-auto rounded-full" />
      </div>

    {isMobileMenuOpen && (
      <>
        <div className="fixed inset-0 z-40 flex">
          <div className="w-2/3 h-full bg-white p-6 flex flex-col gap-6 z-50">
            <img src={iconClose} alt="Close" onClick={toggleMobileMenu} className="w-4 h-4 mb-4 cusor-pointer"/>
            {["Collections", "Men", "Women", "About", "Contact"].map((label, i) => (
              <a
                href="#"
                key={i}
                className="font-bold text-black text-lg"
              >
                {label}
              </a>
            ))}
          </div>
          <div className="w-1/3 h-full bg-black/50">
          </div>
        </div>
      </>
    )}
    </header>
  );
}

export default Header;