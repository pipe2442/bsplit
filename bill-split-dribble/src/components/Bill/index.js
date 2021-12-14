import { useState } from "react";
import "./styles.scss";
import Billcard from "../Billcard";
import FormBill from "../FormBill";
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
    console.warn("EVENTOOO", event.target.name);
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

        <button className="bill__submit"> Charge ${final}</button>

        {custom === "B" && (
          <h4 className="category__text order__text bill__titlediv">
            <span className="category__bold">Custom</span> Percentage
          </h4>
        )}
        <form>
          {custom === "B" &&
            users.map((u, i) => (
              <input
                className="form__input"
                type="number"
                key={i}
                placeholder={`Insert user ${u.index + 1} percentage`}
                onChange={(event) => handleChangeInput(i, event)}
                name="percentage"
              />
            ))}
        </form>
        {custom === "B" && 
          <h4 className="category__text order__text">
            <span className="category__bold">Percentage</span> Values
          </h4>
        }
        {custom === "B" && (
          <ul className="bill__custom">
            {users.map((u, i) => (
              <li className="custom__percentage">
                <p className="custom__percentage">
                  User {u.index + 1} should pay {customPer(final, u.percentage)}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
}

export default Bill;
