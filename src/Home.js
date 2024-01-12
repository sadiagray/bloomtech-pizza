import React from "react";
import { useNavigate, Link } from 'react-router-dom';


function Home() {
    const navigate = useNavigate()
    const handleClick = e => {
      console.log(e.currentTarget.id);
      navigate('/pizza')
    };

  return (
    <div className="getStarted">
      <h1>Home</h1>
      <p className="getStartedText">Click the button below to get started</p>
      <Link to='/pizza'>
      <button id="order-pizza"
        onClick={handleClick}>Order Pizza</button>
      </Link>
    </div>
  );
};
export default Home;