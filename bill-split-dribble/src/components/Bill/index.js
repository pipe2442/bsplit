import { useState } from "react";
import "./styles.scss";
import Billcard from "../Billcard";
import FormBill from "../FormBill";
import FormPercentage from "../FormPercentage";
import {
  addValues,
  findTax,
  finalSum,
  equalDivision,
  usersPercentage,
  customPer,
} from "../../logic/logic.js";

function Bill({ order, handleMenuChange }) {
  const [tip, setTip] = useState(10);
  const [users, setUsers] = useState([]);
  const [custom, setCustom] = useState([]);
  const handleTipChange = (value) => setTip(value);
  const handleUsersChange = (value) => {
    setUsers([...usersPercentage(Number(value))]);
  };
  const handleCustomChange = (value) => setCustom(value);

  const handleChangeInput = (index, event) => {
    const values = [...users];
    values[index][event.target.name] = event.target.value;
    setUsers([...values]);
  };

  const total = addValues(order);
  const tax = findTax(tip, total);
  const final = finalSum(total, tax);
  const equalParts = equalDivision(final, users.length);

  return (
    <>
      <div className="bill">
        <h4 className="category__text order__text">
          <span className="category__bold">Order</span> Menu
        </h4>

        <div className="bill__menu">
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

        <FormBill
          setTip={handleTipChange}
          setUsers={handleUsersChange}
          setCustom={handleCustomChange}
        />

        <div className="bill__results">
          <div className="results__name">
            <p>Sub total:</p>
            <p>PB({tip}%):</p>
          </div>
          <div className="results__amount">
            <p>${total}</p>
            <p>${tax}</p>
          </div>
        </div>

        {custom === "A" && (
          <p className="bill__submit bill__equal">
            Each user has to pay: ${equalParts}
          </p>
        )}

        {custom === "B" && (
          <FormPercentage users={users} handleChangeInput={handleChangeInput} customPer={customPer} final={final} />
        )}

        <button className="bill__submit"> Charge ${final}</button>
      </div>
    </>
  );
}

export default Bill;
