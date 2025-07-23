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
    <header className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <nav>
        {["Collections", "Men", "Women", "About", "Contact"].map((label, i) => (
          <a href="#" key={i}>{label}</a>
        ))}
      </nav>
      <div className="icon">
        <img src={cartIcon} alt="cart" onClick={handleCartClick}/>
        {showCart && (
          <div className="cart-dropdown" ref={cartRef}>
            {cartProducts.length === 0 ? renderEmptyCart() : renderCartItems()}
          </div>
        )}
        <img src={avatar} alt="avatar" className="avatar" />
      </div>
    </header>
  );
}

export default Header;