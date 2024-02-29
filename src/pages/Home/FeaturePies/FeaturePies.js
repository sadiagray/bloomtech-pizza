import React, { useState } from "react";

import './FeaturePies.css'

import image1 from "../../../assets/feature1.jpeg"
import image2 from "../../../assets/feature2.jpeg"
import image3 from "../../../assets/feature3.jpeg"
import image4 from "../../../assets/feature4.jpeg"
import image5 from "../../../assets/feature5.jpeg"
import image6 from "../../../assets/feature6.jpeg"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { BsFillStarFill } from 'react-icons/bs'

const FeaturePies = () => {

    const [items, setItems] = useState([
        { id: 1, url: image1 },
        { id: 2, url: image2 },
        { id: 3, url: image3 },
        { id: 4, url: image4 },
        { id: 5, url: image5 },
        { id: 6, url: image6 },
    ])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };


    return (
        <div className="section">
            <div className="container">
                <div className="feature-container">
                    <div className="feature-carousel">
                        <div>
                            <Slider {...settings}>
                                {items.map(item => (
                                    <div key={item.id}>
                                        <img src={item.url} alt="carousel pic" />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>

                    <div className="feature-content">
                        <h2 className="heading-secondary">
                            Our Featured Pies <span className="ampersand">&#38;</span>
                            <br />
                            <span>
                                Customer <br /> Favorites
                            </span>
                        </h2>


                        <h4>Try one today, or build your own!</h4>

                        <p>Our menu features a variety of classics as well as a few house specials! These include sauce and topping combos that were specially combined by our chefs to bring out the best of our fresh ingriedients as well as popular customized orders by our patrons!

                            <br />
                            <br />

                            Customer satisfaction is our top priority so we make sure every pie fresh to order and allow all customizations! Every featured pie can be made to fit your liking, or you can start from scratch and build something completely new! The possibilities are endless!
                        </p>

                        <blockquote>
                            “Pizza is a Band Aid for so many problems.”
                            ― Mike Birbiglia, The New One: Painfully True Stories from a Reluctant Dad
                        </blockquote>
                    </div>
                </div>

                <div className="feature-card-container">
                    <div className="feature-card feature-card-left">
                        <img src={image1} alt="cheese" className="feature-card-image" />

                        <div className="feature-card-content">
                            <div className="feature-card-title">
                                <BsFillStarFill color="#c3512f" />
                                <h3 className="heading-tertiary">
                                    The best <span>ingriedients</span>
                                </h3>
                            </div>

                            <p>We use only the freshest ingriedients! We source all of our produce locally and make our sauces and dough from scratch! We use the finest quality cheeses and grate them fresh daily in-house!</p>
                        </div>
                    </div>

                    <div className="feature-card feature-card-right">
                        <img src={image2} alt="arugula" className="feature-card-image" />

                        <div className="feature-card-content">
                            <div className="feature-card-title">
                                <BsFillStarFill color="#c3512f" />
                                <h3 className="heading-tertiary">
                                    Customer <span>satisfaction</span>
                                </h3>
                            </div>

                            <p>We value our customers and always strive to bring the you the best service! That's why all of our pizzas are fully customizable and we offer gluten free options for all of our crusts! If there is anything we can do to make you experience special, pleace let us know!</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FeaturePies