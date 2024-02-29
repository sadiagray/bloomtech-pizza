import React from "react";
import HeroImage from "../../components/Hero/HeroImage";
import bgImage from '../../assets/feature6.jpeg';
import './Order.css'
import SpecialsOrder from "./SpecialsOrder";
import SizeOrder from "./SizeOrder";
import CrustOrder from "./CrustOrder";
import SauceOrder from "./SauceOrder";
import ToppingsOrder from "./ToppingsOrder";
import BevsOrder from "./BevsOrder";
import { NavLink } from "react-router-dom";


const Order = ({ addToCart }) => {

    return (
        <div>
            <HeroImage
                bgImage={bgImage}
                heading={["Order ", <span>Now</span>]}
                text="Build your own or choose from one of our Specialty Pizzas!"
            />

            <div className="container order">
                <h1 className="heading-secondary additem">
                    <span>click an item </span>to add to order
                </h1>
                <div className="container">
                    <div className="special">
                    <h1 className="heading-secondary">
                        <span>Specialty </span>Pies
                    </h1>
                        <SpecialsOrder addToCart={addToCart} />
                    </div>

                    <div className="size">
                    <h1 className="heading-secondary">
                        <span>Pizza</span> Sizes
                    </h1>
                        <SizeOrder addToCart={addToCart} />
                    </div>
                    
                    <div className="crust">
                    <h1 className="heading-secondary">
                        <span>Crust</span> options
                    </h1>
                        <CrustOrder addToCart={addToCart} />
                    </div>
                    
                    <div className="sauce">
                    <h1 className="heading-secondary">
                        <span>Sauce</span> options
                    </h1>
                        <SauceOrder addToCart={addToCart} />
                    </div>
                    
                    <div className="topping">
                    <h1 className="heading-secondary">
                        <span>Topping</span> Options
                    </h1>
                        <ToppingsOrder addToCart={addToCart} />
                    </div>
                    
                    <div className="bevs">
                    <h1 className="heading-secondary">
                        <span>Beverage</span> Options
                    </h1>
                        <BevsOrder addToCart={addToCart} />
                    </div>
                    
                </div>
                <div className="order-btn">
                    <h1 className="heading-secondary">
                        <span>are you </span>done?
                    </h1>

                    <button><NavLink className="nav-link" to="/cart">See Cart & Check Out</NavLink></button>
                </div>
            </div>
        </div>
    )
}

export default Order;