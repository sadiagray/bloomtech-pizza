import React from "react";

import ListItem from "../../components/ListItem/ListItem";

import Water from '../../assets/water.jpeg';
import Sparkling from '../../assets/sparkling.png';
import Infused from '../../assets/infused.jpeg';
import SweetT from '../../assets/sweettea.jpeg';
import LemonA from '../../assets/lemonaid.jpeg';
import FruitP from '../../assets/fruitpunch.jpeg';
import Coke from '../../assets/coke.jpeg';
import Sprite from '../../assets/sprite.jpeg';
import DP from '../../assets/drpepper.jpeg';




const menuDataLeft = [
    {
        title: "Water",
        price: "0.00",
        img: Water,
    },
    {
        title: "Sparkling Water",
        price: "1.00",
        img: Sparkling,
    },
    {
        title: "Infused Water (Mint, Lemon, Raspberry)",
        price: "1.00",
        img: Infused,
    },
];

const menuDataMiddle = [
    {
        title: "Sweet Tea",
        price: "1.00",
        img: SweetT,
    },
    {
        title: "Lemonaid",
        price: "1.00",
        img: LemonA,
    },
    {
        title: "Fruit Punch",
        price: "1.00",
        img: FruitP,
    },
];

const menuDataRight = [
    {
        title: "Coke",
        price: "1.50",
        img: Coke,
    },
    {
        title: "Sprite",
        price: "1.50",
        img: Sprite,
    },
    {
        title: "Dr. Pepper",
        price: "1.50",
        img: DP,
    },
];

const BevsOrder = ({ addToCart }) => {
    return (
        <div className="container order">
            <div className="grid-container">
            <div className="bevs">
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

                    <div className="bevs">
                        {
                            menuDataMiddle.map((data, i) => (
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

                    <div className="bevs">
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

export default BevsOrder