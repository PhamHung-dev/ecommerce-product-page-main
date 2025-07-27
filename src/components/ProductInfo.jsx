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
    <div className="flex-1 pr-20 pt-14">
        <div className="flex flex-col gap-8">
            <h4 className='text-gray-500 tracking-widest m-0'>SNEAKER COMPANY</h4>
            <h1 className='text-4xl leading-[3rem] font-bold m-0'>Fall Limited Edition Sneakers</h1>
            <p className='text-gray-500 text-[1.1rem] leading-7 tracking-wide m-0'>These low-profile sneakers are your perfect casual
                wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </div>

        <div className="flex flex-col my-4">
            <div className="flex items-end gap-4 font-bold text-xl">
                <span className="text-2xl tracking-wider">$125.00</span>
                <span className="bg-black text-white py-[0.2rem] px-[0.5rem] text-[1.2rem] rounded">50%</span>
            </div>
            <div className="line-through text-gray-500 text-[1.2rem] font-bold mt-[0.9rem]">$250.00</div>
        </div>

        <div className="flex items-center gap-4 h-14 mt-6">
            <div className="basis-2/5 flex w-full h-full items-center bg-gray-100 rounded-md">
                <div className="flex-1 text-center cursor-pointer mb-1" onClick={handleDecrease}>
                    <img src={iconMinus} alt="minus button" className='mx-auto'/>
                </div>
                <div className="flex-1 text-center text-[1.2rem] font-bold">{proQuantity}</div>
                <div className="flex-1 text-center cursor-pointer" onClick={handleIncrease}>
                    <img src={iconPlus} alt="plus button" className='mx-auto'/>
                </div>
            </div>
            <button className="basis-3/5 flex h-full items-center justify-center gap-4 bg-orange-500
                text-black font-bold rounded-lg px-6 py-3 mr-14 hover:opacity-90 transition"
                onClick={handleAddToCart}
            >
                <img src={iconCart} alt="cart"/>
                <div className='text-[1.2rem]'>Add to cart</div>
            </button>
        </div>
    </div>
    );
}

export default ProductInfo;