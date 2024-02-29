import React from "react";
import ListItem from "../../../components/ListItem/ListItem";
import './SpecialtyPies.css'

import image1 from '../../../assets/feature1.jpeg'
import image2 from '../../../assets/feature2.jpeg'
import image3 from '../../../assets/feature3.jpeg'
import image4 from '../../../assets/feature4.jpeg'
import image5 from '../../../assets/special.jpeg'
import image6 from '../../../assets/shrimpspecial.jpeg'

const menuData = [
    {
        title: "Classic Cheese",
        description: "Our hand-tossed dough, spread with house-made tomato sauce, covered in fresh grated mozzarella and parmesan, then cooked to perfection in our traditional stone oven for a flavor you can't beat! *Large*",
        price: "11.99",
        img: image1,
    },
    {
        title: "Arugula Tomato",
        description: "Our hand-tossed dough covered in cherry tomotoes and spread with house-made basil pesto sauce then covered in fresh grated parmesan and itialian cheeses, thin sliced and shredded prosciutto, fresh arugula, and sprinkled with extra virgin olive oil, salt, pepper, fresh oregano, and thyme before it's finally cooked to perfection in our traditional stone oven for a delicious and healthy treat! *Large*",
        price: "13.49",
        img: image2,
    },
    {
        title: "Pep & Veg",
        description: "Our hand-tossed dough, robust house-made tomato sauce, covered in fresh grated mozzarella and parmesan, then covered in garden fresh mushrooms, onions, and bell peppers and deli fresh slices of pepperoni before it's finally cooked to perfection in our traditional stone oven for a filling meal! *Large*",
        price: "11.99",
        img: image3,
    },
    {
        title: "Philly",
        description: "Our hand-tossed dough, creamy house-made garlic parm sauce, covered in fresh grated mozzarella provolone and parmesan, then covered in garden fresh sliced onions, and bell peppers and thinly sliced steak before it's finally cooked to perfection in our traditional stone oven for a delicious take on a Philly classic! *Large*",
        price: "12.99",
        img: image4,
    },
    {
        title: "Goat Cheese & Fig",
        description: "Our hand-tossed dough coated in olive oil and fired in our traditional stone oven, then spread with savory goat cheese and covered with an arrangement of caramelized onions and fresh figs, topped with a sprinkle of freshly grated mozzarella and rosemary *Large*",
        price: "13.74",
        img: image5,
    },
    {
        title: "Shrimp Alfredo",
        description: "Our hand-tossed dough, savory house-made alfredo sauce, covered in fresh grated parmesan, then covered in sauted shrimp before it's finally cooked in our stone oven for a shrimp alfredo you can finally dig into without that silly fork slowing you down!",
        price: "13.49",
        img: image6,
    }
];

const SpecialtyPies = () => {
    return (
        <div className="section">
            <div className="container specialty-pies">
                <h1 className="heading-secondary">
                    <span>Specialty </span>pies
                </h1>
                {menuData.map((data, i) => (
                    <ListItem
                        title={data.title}
                        description={data.description}
                        price={data.price}
                        itemImage={data.img}
                    />
                ))}
            </div>
        </div>
    )
}

export default SpecialtyPies