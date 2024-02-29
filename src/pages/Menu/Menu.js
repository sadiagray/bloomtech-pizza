import React from "react";
import HeroImage from "../../components/Hero/HeroImage";
import bgImage from '../../assets/heroimg.jpeg';
import SpecialtyPies from "./SpecialtyPies/SpecialtyPies";
import Crust from "./Crust/Crust";
import Sauce from "./Sauce/Sauce";
import Toppings from "./Toppings/Toppings";
import Beverages from "./Beverages/Beverages";
import Sizes from "./Sizes/Sizes";

const Menu = () => {
    return (
        <div>
            <HeroImage 
            bgImage={bgImage}
            heading={["Our ", <span>Menu</span>]}
            text="Our delicious handcrafted pies, made to order."
            />
            <SpecialtyPies />
            <Sizes />
            <Crust />
            <Sauce />
            <Toppings />
            <Beverages />
        </div>
    )
}

export default Menu