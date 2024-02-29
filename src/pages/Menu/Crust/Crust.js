import React from "react";

import './Crust.css'
import ListItem from '../../../components/ListItem/ListItem';

const menuDataLeft = [
    {
        title: "Classic Hand Tossed",
        description: "Our home-made dough; hand rolled and tossed, then pressed out and filled. Gluten free available"
    },
    {
        title: "Pan",
        description: "Our home-made dough; pressed into a pan to give a slight crisp when cooked. Gluten free available"
    },
    {
        title: "Thin",
        description: "Our home-made dough; rolled thin for a crisp cook. Gluten free available"
    },
];

const menuDataRight = [
    {
        title: "Deep Dish/Chicago",
        description: "Our home-made dough; extra thick and cooked in a deep pan, truly a pie. Gluten free available"
    },
    {
        title: "Sicillian",
        description: "Our home-made dough; baked into a thick and pillowy square, crunchy on the outside, soft and airy on the inside. Gluten free available"
    },
    {
        title: "Cauliflower",
        description: "A healthier alternative; Plant based and always gluten free, our cauliflower crust is not only good for you, it tastes good too!"
    },
];

const Crust = () => {
    return (
        <div className="container crust">
            <h1 className="heading-secondary">
                <span>Crust</span> options
            </h1>

            <div className="grid-container">
                <div>
                    {menuDataLeft.map((data, i) => (
                        <ListItem 
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </div>

                <div>
                    {menuDataRight.map((data, i) => (
                        <ListItem 
                            title={data.title}
                            description={data.description}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Crust