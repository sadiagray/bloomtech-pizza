import React from "react";

import ListItem from "../../components/ListItem/ListItem";

import Mozza from '../../assets/mozzarella.jpeg';
import Parm from '../../assets/parm.jpeg';
import Cheddar from '../../assets/cheddar.jpeg';
import Provo from '../../assets/provolone.jpeg';
import Itali from '../../assets/italian.jpeg';
import Goat from '../../assets/goat.jpeg';
import Gouda from '../../assets/gouda.jpeg';
import Gruyere from '../../assets/gruyere.jpeg';
import Pep from '../../assets/pepperoni.jpeg';
import Steak from '../../assets/steak.jpeg';
import Chick from '../../assets/chicken.jpeg';
import Bacon from '../../assets/bacon.jpeg';
import Pros from '../../assets/PROSCIUTTO.jpeg';
import Gyro from '../../assets/gyro.jpeg';
import Shrimp from '../../assets/shrimp.jpeg';
import Peppers from '../../assets/peppers.jpeg';
import Onions from '../../assets/onions.jpeg';
import Mushrooms from '../../assets/mushrooms.jpeg';
import Olives from '../../assets/olives.jpeg';
import Figs from '../../assets/figs.jpeg';
import Arug from '../../assets/arugula.jpeg';
import Spinach from '../../assets/spinach.jpeg';
import Herbs from '../../assets/herbs.jpeg';
import Beef from '../../assets/beef.jpeg';

const menuDataLeft = [
    {
        title: "Mozzarella",
        img: Mozza,
    },
    {
        title: "Parmesan",
        img: Parm,
    },
    {
        title: "Cheddar",
        img: Cheddar,
    },
    {
        title: "Provolone",
        img: Provo,
    },
    {
        title: "Italian",
        img: Itali,
    },
    {
        title: "Goat",
        price: "+1.00",
        img: Goat,
    },
    {
        title: "Gouda",
        price: "+1.00",
        img: Gouda,
    },
    {
        title: "Gruyere",
        price: "+1.00",
        img: Gruyere,
    },
];

const menuDataMiddle = [
    {
        title: "Pepperoni",
        img: Pep,
    },
    {
        title: "Steak",
        price: "+1.00",
        img: Steak,
    },
    {
        title: "Chicken",
        img: Chick,
    },
    {
        title: "Bacon",
        img: Bacon,
    },
    {
        title: "Prosciutto",
        price: "+1.50",
        img: Pros,
    },
    {
        title: "Gyro",
        price: "+1.50",
        img: Gyro,
    },
    {
        title: "Shrimp",
        price: "+1.50",
        img: Shrimp,
    },
    {
        title: "Beef",
        img: Beef,
    },
];

const menuDataRight = [
    {
        title: "Peppers",
        img: Peppers,
    },
    {
        title: "Onions",
        img: Onions,
    },
    {
        title: "Mushrooms",
        img: Mushrooms,
    },
    {
        title: "Olives",
        img: Olives,
    },
    {
        title: "Figs",
        price: "+.75",
        img: Figs,
    },
    {
        title: "Arugula",
        img: Arug,
    },
    {
        title: "Spinach",
        img: Spinach,
    },
    {
        title: "Herbs",
        img: Herbs,
    },
];

const ToppingsOrder = ({ addToCart }) => {
    return (
        <div className="container order">
            <div className="grid-container">
            <div className="toppings">
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

                    <div className="toppings">
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

                    <div className="toppings">
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

export default ToppingsOrder