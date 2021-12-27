import React from "react";
import './styles.scss'

function Billresults({ tip, total, tax, final }) {
  return (
    <>
      <div className="results">
        <div className="results__name">
          <p>Sub total:</p>
          <p>PB({tip}%):</p>
        </div>
        <div className="results__amount">
          <p>${total}</p>
          <p>${tax}</p>
        </div>
      </div>
      <button className="bill__submit"> Charge ${final}</button>
    </>
  );
}

export default Billresults;
