import React from "react";

import './Beverages.css'
import ListItem from "../../../components/ListItem/ListItem";


const menuDataLeft = [
    {
        title: "Water",
        price: "0.00"
    },
    {
        title: "Sparkling Water",
        price: "1.00"
    },
    {
        title: "Infused Water (Mint, Lemon, Rasberry)",
        price: "1.00"
    },
];

const menuDataMiddle = [
    {
        title: "Sweet Tea",
        price: "1.00"
    },
    {
        title: "Lemonaid",
        price: "1.00"
    },
    {
        title: "Fruit Punch",
        price: "1.00"
    },
];

const menuDataRight = [
    {
        title: "Coke",
        price: "1.50"
    },
    {
        title: "Sprite",
        price: "1.50"
    },
    {
        title: "Dr. Pepper",
        price: "1.50"
    },
]

const Beverages = () => {
    return (
        <div className="section">
            <div className="container beverages">
                <h1 className="heading-secondary">
                    <span>Beverage</span> Options
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

export default Beverages