import React from "react";

import ListItem from "../../components/ListItem/ListItem";

import Robust from '../../assets/tomato.jpeg';
import Alfredo from '../../assets/alfredo.jpeg';
import GarPam from '../../assets/garlicparm.jpeg';
import Pesto from '../../assets/pesto.jpeg';
import BBQ from '../../assets/bbq.jpeg';
import Ranch from '../../assets/ranch.jpeg';

const menuDataLeft = [
    {
        title: "Robust Tomato",
        img: Robust,
    },
    {
        title: "Creamy Alfredo",
        img: Alfredo,
    },
    {
        title: "Garlic Parm",
        img: GarPam,
    },
];

const menuDataRight = [
    {
        title: "Pesto",
        img: Pesto,
    },
    {
        title: "BBQ",
        img: BBQ,
    },
    {
        title: "Ranch",
        img: Ranch,
    },
];

const SauceOrder = ({ addToCart }) => {
    return(
        <div className="container order">
            <div className="grid-container">
            <div className="sauce">
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

                    <div className="sauce">
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

export default SauceOrder