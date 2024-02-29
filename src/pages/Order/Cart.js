import React from "react";

import HeroImage from "../../components/Hero/HeroImage";
import bgImage from '../../assets/cart.jpeg';

const Cart = ({ cart, removeFromCart }) => {
    return (
        <div>
            <HeroImage
                bgImage={bgImage}
                heading={["Your ", <span>Cart</span>]}
                text="Review your order and get ready to check out!"
            />
            <div className="container">
                <h1 className="heading-secondary">Cart</h1>
                <ul>
                    {cart.map((item, index) => (
                        <li key={index}>
                            {item.title} - ${item.price}{" "}
                            <button className="remove-from-cart" onClick={() => removeFromCart(index)}>Remove</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Cart;