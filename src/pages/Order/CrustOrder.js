import React from "react";

import ListItem from "../../components/ListItem/ListItem";

import HandTossed from '../../assets/handtossed.jpeg';
import Pan from '../../assets/pan.jpeg';
import Thin from '../../assets/thin.jpeg';
import Deep from '../../assets/deepdish.jpeg';
import Sici from '../../assets/sicillian.jpeg';
import Cauli from '../../assets/cauliflower.jpeg';


const menuDataLeft = [
    {
        title: "Classic Hand Tossed",
        img: HandTossed,
    },
    {
        title: "Pan",
        img: Pan,
    },
    {
        title: "Thin",
        img: Thin,
    },
];

const menuDataRight = [
    {
        title: "Deep Dish/Chicago",
        img: Deep,
    },
    {
        title: "Sicillian",
        img: Sici,
    },
    {
        title: "Cauliflower",
        img: Cauli,
    },
];


const CrustOrder = ({ addToCart }) => {
    return (
        <div className="container order">
            <div className="grid-container">
            <div className="crust">
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

                    <div className="crust">
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

export default CrustOrder