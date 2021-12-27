import { useState } from "react";
import "./styles.scss";
import Billresults from "../Billresults";
import Billmenu from "../Billmenu";
import FormBill from "../FormBill";
import FormPercentage from "../FormPercentage";
import { billCalculations } from "../../logic/logic.js";

function Bill({ order, handleMenuChange }) {
  const [tip, setTip] = useState(10);
  const [users, setUsers] = useState(0);
  const [custom, setCustom] = useState("");

  const handleTipChange = (value) => setTip(value);
  const handleUsersChange = (value) => setUsers(value);
  const handleCustomChange = (value) => setCustom(value);

  const { total, tax, final, equalParts } = billCalculations(order, tip, users);

  return (
    <>
      <div className="bill">
        <h4 className="category__text order__text">
          <span className="category__bold">Order</span> Menu
        </h4>
        <Billmenu handleMenuChange={handleMenuChange} order={order} />
        <FormBill
          setTip={handleTipChange}
          setUsers={handleUsersChange}
          setCustom={handleCustomChange}
        />
        <Billresults tip={tip} total={total} tax={tax} final={final} />
        {custom === "A" && (
          <p className="bill__submit bill__equal">
            Each user has to pay: ${equalParts}
          </p>
        )}
        {custom === "B" && <FormPercentage users={users} final={final} />}
      </div>
    </>
  );
}

export default Bill;
