import React from "react";

import './Hero.css'

const Hero = () => {
    return (
        <div className="hero-img container">
            <div className="hero-content">
                <h1 className="heading-primary">
                    <span>Welcome</span> to BloomTech Pizza
                </h1>

                <p className="text-white">Authentic Pies for BT Alumni</p>

                <p className="text-white">
                    Order online or call <span className="special-word">(555)123-4567</span>
                </p>
            </div>

        </div>
    )
}

export default Hero