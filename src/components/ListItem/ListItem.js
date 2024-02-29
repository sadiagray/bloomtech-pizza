import React from "react";
import './ListItem.css'

const ListItem = ({title, description, price, itemImage, showAddToCartButton, onAddToCart}) => {
    return (
        <div className="list-items">
            <ul>
                <li>
                    {itemImage && <img src={itemImage} alt="hero" />}

                    <div>
                        <h3>{title}</h3>
                        {description && <p>{description}</p>}
                    </div>

                    {price && <h3>${price}</h3>}
                    {showAddToCartButton && <button className="add-to-cart" onClick={onAddToCart}>Add to Cart</button>}
                </li>
            </ul>
        </div>
    )
}

export default ListItem