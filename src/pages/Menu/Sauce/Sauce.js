import React from "react";
import ListItem from '../../../components/ListItem/ListItem';
import './Sauce.css'


const menuDataLeft = [
    {
        title: "Robust Tomato",
        description: "Garden fresh tomatoes, garlic, and basil in a flavorful classic"
    },
    {
        title: "Creamy Alfredo",
        description: "Fresh cream and parmesan with a dash of pepper. Sometimes simple is best"
    },
    {
        title: "Garlic Parm",
        description: "Similar to our Alfredo, but with a buttery garlic twist!"
    },
];

const menuDataRight = [
    {
        title: "Pesto",
        description: "Olive Oil, garlic, parmesan, roasted pine nut, basil, and lemon. A simple and clean sauce option that is bursting with flavor!"
    },
    {
        title: "BBQ",
        description: "A southern staple. Smokey flavor to add to our fire cooked pies for an extra kick!"
    },
    {
        title: "Ranch",
        description: "We all know what it is, we all know someone who could drink it, and somehow it sometimes works. We dont complain"
    },
];


const Sauce = () => {
    return (
        <div className="section">
            <div className="container sauce">
            <h1 className="heading-secondary">
                <span>Sauce</span> options
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
        </div>
    )
}

export default Sauce