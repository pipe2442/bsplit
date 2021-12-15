import React from "react";
import "./styles.scss";
import Billcard from "../Billcard";

function Billmenu({ handleMenuChange, order }) {
  return (
    <>
      <div className="menu">
        {order.map(
          (dish, idx) =>
            dish.quantity > 0 && (
              <Billcard
                dish={dish}
                handleMenuChange={handleMenuChange}
                idx={idx}
              />
            )
        )}
      </div>
    </>
  );
}

export default Billmenu;
