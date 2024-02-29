import React from "react";

import ListItem from "../../components/ListItem/ListItem";

import Cheese from '../../assets/feature1.jpeg';
import ArugTom from '../../assets/feature2.jpeg';
import PepVeg from '../../assets/feature3.jpeg';
import Philly from '../../assets/feature4.jpeg';
import GoatFig from '../../assets/special.jpeg';
import ShrimpAlf from '../../assets/shrimpspecial.jpeg';

const menuDataLeft = [
    {
        title: "Classic Cheese",
        img: Cheese,
    },
    {
        title: "Arugula Tomato",
        img: ArugTom,
    },
    {
        title: "Pep & Veg",
        img: PepVeg,
    },
];

const menuDataRight = [
    {
        title: "Philly",
        img: Philly,
    },
    {
        title: "Goat Cheese & Fig",
        img: GoatFig,
    },
    {
        title: "Shrimp Alfredo",
        img: ShrimpAlf,
    },
];

const SpecialsOrder = ({ addToCart }) => {
    return (
        <div className="container order">
            <div className="grid-container">
            <div className="specials">
                        {
                            menuDataLeft.map((data, i) => (
                                <ListItem
                                    title={data.title}
                                    description={data.description}
                                    price={data.price}
                                    itemImage={data.img}
                                    onAddToCart={() => addToCart(data)}
                                    showAddToCartButton={true}
                                />
                            ))
                        }
                    </div>

                    <div className="specials">
                        {
                            menuDataRight.map((data, i) => (
                                <ListItem
                                    title={data.title}
                                    description={data.description}
                                    price={data.price}
                                    itemImage={data.img}
                                    onAddToCart={() => addToCart(data)}
                                    showAddToCartButton={true}
                                />
                            ))
                        }
                    </div>
            </div>
        </div>
    )
}

export default SpecialsOrder