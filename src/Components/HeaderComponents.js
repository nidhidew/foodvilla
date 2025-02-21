import React from "react";

const Title = () => {
  return (
    <div>
      <a href="/">
        <h1>Food Villa</h1>
      </a>
    </div>
  );
};
const HeaderComponents = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponents;
