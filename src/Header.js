import React from "react";
import './App.css';


function Header ({showing}) {
    const [show, setShow] = React.useState(false);
    return(
        <div>
            <div className="container">
                <h1>BLOOMTECH PIZZA</h1>
            </div>
        </div>
    );
}

export default Header;