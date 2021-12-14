import React from "react";
import "./styles.scss";
import Foodcard from "../Foodcard";

function Menu({ menu, handleMenuChange }) {
  return (
    <>
      <h4 className="category__text order__text">
        <span className="category__bold">Choose</span> Order
      </h4>
      <section className="menu">
        {menu.map((dish, idx) => (
          <button key={idx} className="menu__element" onClick={() => handleMenuChange(dish, idx)}>
            <Foodcard dish={dish} />
          </button>
        ))}
      </section>
    </>
  );
}

export default Menu;
