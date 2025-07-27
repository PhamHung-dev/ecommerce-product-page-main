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
    <div className="none-cart">
      <h3>Cart</h3>
      <div className="cart-content-empty">
        <p>Your cart is empty.</p>
      </div>
    </div>
  );

  const renderCartItems = () => (
    <div className="cart-item">
      <h3>Cart</h3>
      {cartProducts.map((product, index) => (
        <div className="item" key={index}>
          <img src={lightboxThumbnail1} className="cart-thumb" alt="product thumbnail" />
          <div className="item-info">
            <p className="product-name">{product.name}</p>
            <p className="price">
              $125.00 x {product.quantity}
              <span className="total-price"> ${product.quantity * 125}.00</span>
            </p>
          </div>
          <img src={deleteIcon} className="delete-icon" alt="delete" />
        </div>
      ))}
      <button className="checkout-btn">Checkout</button>
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
          <div className="absolute top-16 right-0 bg-white shadow-lg rounded p-4 w-64 z-10" ref={cartRef}>
            {cartProducts.length === 0 ? renderEmptyCart() : renderCartItems()}
          </div>
        )}
        <img src={avatar} alt="avatar" className="w-12 h-auto rounded-full" />
      </div>
    </header>
  );
}

export default Header;