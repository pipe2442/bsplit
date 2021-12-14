import React from "react";
import "./styles.scss";
import { percentageSum } from "../../logic/logic";

function FormPercentage({ users, handleChangeInput, customPer, final }) {
  const totalPercentage = percentageSum(users);
  return (
    <>
      <h4 className="category__text order__text bill__titlediv">
        <span className="category__bold">Custom</span> Percentage
      </h4>

      {totalPercentage > 100 && (
        <p className="error">
          Error total percentage can not be greater than 100% You should give
          each user a percentage until the total sum is 100%
        </p>
      )}
      {totalPercentage <= 100 && (
        <p>Remaining percentage is: {100 - totalPercentage}</p>
      )}

      <div className="formpercentage">
        {users.map((u, i) => (
          <div>
            <input
              className="form__input"
              type="number"
              key={i}
              placeholder={`Insert user ${u.index + 1} percentage %`}
              onChange={(event) => handleChangeInput(i, event)}
              name="percentage"
            />
            <p className="formpercentage__text">
              User {u.index + 1} should pay {customPer(final, u.percentage)}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}

export default FormPercentage;
