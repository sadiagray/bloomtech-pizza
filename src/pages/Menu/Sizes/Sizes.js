import React from "react";

import './Sizes.css'
import ListItem from '../../../components/ListItem/ListItem';

const menuDataLeft = [
    {
        title: "Personal",
        description: "10in, 4 slices, serves 1",
        price: "5.99"
    },
    {
        title: "Small",
        description: "12in, 6 slices, serves 1-2",
        price: "7.99"
    },
    {
        title: "Medium",
        description: "14in, 8 slices, serves 2-4",
        price: "9.99"
    },
];

const menuDataRight = [
    {
        title: "Large",
        description: "16in, 10 slices, serves 4-6",
        price: "11.99"
    },
    {
        title: "X-Large",
        description: "18in, 12 slices, serves 6-8",
        price: "13.99"
    },
    {
        title: "Single Slice",
        description: "One slice of our Specialty Pies on display, no customizations",
        price: "1.00"
    },
];

const Sizes = () => {
    return (
        <div className="container sizes">
            <h1 className="heading-secondary">
                <span>Pizza</span> Sizes
            </h1>

            <div className="grid-container">
                <div>
                    {menuDataLeft.map((data, i) => (
                        <ListItem 
                            title={data.title}
                            description={data.description}
                            price={data.price}
                        />
                    ))}
                </div>

                <div>
                    {menuDataRight.map((data, i) => (
                        <ListItem 
                            title={data.title}
                            description={data.description}
                            price={data.price}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Sizes