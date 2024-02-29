import React from "react";

import './Toppings.css'
import ListItem from "../../../components/ListItem/ListItem";

const menuDataLeft = [
    {
        title: "Mozzarella",
    },
    {
        title: "Parmesan",
    },
    {
        title: "Cheddar",
    },
    {
        title: "Provolone",
    },
    {
        title: "Italian",
    },
    {
        title: "Goat",
        price: "+1.00",
    },
    {
        title: "Gouda",
        price: "+1.00",
    },
    {
        title: "Gruyere",
        price: "+1.00",
    },
];

const menuDataMiddle = [
    {
        title: "Pepperoni",
    },
    {
        title: "Steak",
        price: "+1.00",
    },
    {
        title: "Chicken",
    },
    {
        title: "Bacon",
    },
    {
        title: "Prosciutto",
        price: "+1.50",
    },
    {
        title: "Gyro",
        price: "+1.50",
    },
    {
        title: "Shrimp",
        price: "+1.50",
    },
    {
        title: "Beef",
    },
];

const menuDataRight = [
    {
        title: "Peppers",
    },
    {
        title: "Onions",
    },
    {
        title: "Mushrooms",
    },
    {
        title: "Olives",
    },
    {
        title: "Figs",
        price: "+.75",
    },
    {
        title: "Arugula",
    },
    {
        title: "Spinach",
    },
    {
        title: "Herbs",
    },
]

const Toppings = () => {
    return (
        <div className="section">
            <div className="container toppings">
                <h1 className="heading-secondary">
                    <span>Topping</span> Options
                </h1>

                <div className="grid-container">
                    <div>
                        {menuDataLeft.map((data, i) => (
                            <ListItem 
                                key={i}
                                title={data.title}
                                price={data.price}
                            />
                        ))}
                    </div>

                    <div>
                        {menuDataMiddle.map((data, i) => (
                            <ListItem 
                                key={i}
                                title={data.title}
                                price={data.price}
                            />
                        ))}
                    </div>

                    <div>
                        {menuDataRight.map((data, i) => (
                            <ListItem 
                                key={i}
                                title={data.title}
                                price={data.price}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Toppings