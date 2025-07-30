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
    <div className="flex-1 lg:pr-20 lg:pt-14 lg:px-0 lg:pb-0 p-4">
        <div className="flex flex-col lg:gap-8 gap-2">
            <h4 className='text-gray-500 tracking-widest m-0'>SNEAKER COMPANY</h4>
            <h1 className='lg:text-4xl text-[1.75rem] lg:leading-[3rem] leading-tight font-bold m-0'>Fall Limited Edition Sneakers</h1>
            <p className='text-gray-500 lg:text-[1.1rem] text-[0.875rem] lg:leading-7 leading-snug tracking-wide m-0'>These low-profile sneakers are your perfect casual
                wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        </div>

        <div className="flex lg:flex-col flex-row lg:my-4 my-8 lg:pt-6 leading-none">
            <div className="flex items-end gap-4 font-bold text-xl leading-none">
                <span className="text-2xl tracking-wider leading-none">$125.00</span>
                <span className="bg-black text-white py-[3px] px-[0.5rem] text-sm rounded leading-none">50%</span>
            </div>
            <div className="w-full lg:w-auto line-through text-gray-500 lg:mt-6 text-[1.2rem] font-bold mt-[0.9rem] text-right lg:text-left">$250.00</div>
        </div>

        <div className="flex items-center lg:flex-row flex-col lg:mt-6 gap-4 lg:h-14 mt-6">
            <div className="lg:w-[40%] w-full lg:h-14 h-[30%] py-4 flex items-center bg-gray-100 rounded-md">
                <div className="flex-1 cursor-pointer mb-1" onClick={handleDecrease}>
                    <img src={iconMinus} alt="minus button" className='mx-auto w-3 h-1'/>
                </div>
                <div className="flex-1 text-center text-[1.2rem] font-bold">{proQuantity}</div>
                <div className="flex-1 cursor-pointer" onClick={handleIncrease}>
                    <img src={iconPlus} alt="plus button" className='mx-auto w-3 h-3'/>
                </div>
            </div>
            <button className="lg:w-[60%] w-full lg:h-14 h-[30%] py-4 flex items-center justify-center gap-4 bg-orange-500
                text-black font-bold rounded-lg px-6 py-3 lg:mr-14 hover:opacity-90 transition"
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