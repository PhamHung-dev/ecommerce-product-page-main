import React, { useState } from 'react';
import iconMinus from "../assets/images/icon-minus.svg";
import iconPlus from "../assets/images/icon-plus.svg";
import iconCart from "../assets/images/icon-cart.svg";

function ProductInfo({ cartProducts, setCartProducts }) {
    const [proQuantity, setProQuantity] = useState(0);

    const handleIncrease = () => {
        setProQuantity(proQuantity + 1);
    };

    const handleDecrease = () => {
        if (proQuantity > 0) {
            setProQuantity(proQuantity - 1);
        }
    };

    const handleAddToCart = () => {
        const productID = "0001";
        const productName = "Fall Limited Edition Sneakers";
        const productPrice = 125;

        const existing = cartProducts.find(p => p.id === productID);

        if (existing) {
            const updated = cartProducts.map(p =>
                p.id === productID ? { ...p, quantity: p.quantity + proQuantity } : p
            )
            setCartProducts(updated);
        } else {
            setCartProducts([
                ...cartProducts,
                { id: productID, name: productName, quantity: proQuantity, price: productPrice }
            ]);
        }

        setProQuantity(0);
    };

    return (
    <div className="product-info">
        <div className="product-name">
            <h4>SNEAKER COMPANY</h4>
            <h1>Fall Limited Edition Sneakers</h1>
            <p>These low-profile sneakers are your perfect casual wear companion. Featuring a 
                durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </div>

        <div className="price-box">
            <div className="current-price">
                <span className="price">$125.00</span>
                <span className="discount">50%</span>
            </div>
            <div className="price-before-discount">$250.00</div>
        </div>

        <div className="cart-control">
            <div className="quantity-selector">
                <div className="control-minus" onClick={handleDecrease}>
                    <img src={iconMinus} alt="minus button"/>
                </div>
                <div className="quantity">{proQuantity}</div>
                <div className="control-plus" onClick={handleIncrease}>
                    <img src={iconPlus} alt="plus button"/></div>
                </div>
            <button className="add-to-cart" onClick={handleAddToCart}>
                <img src={iconCart} alt="cart"/>
                <div>Add to cart</div>
            </button>
        </div>
    </div>
    );
}

export default ProductInfo;