import React from "react";
import './thanks.css'
import { Link } from 'react-router-dom';
  
const Thanks = () => {
  return (
    <div>
      <h1 className="Thanks">Thanks for Shopping!</h1>
      <Link to="/store">Back to shopping</Link>
    </div>
  );
};
  
export default Thanks;