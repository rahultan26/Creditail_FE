import React from "react";
import "./amount.css";
const Amount = (props) => {
  return (
    <div className="rectangle">
      <div className="text">Amount</div>
      <div className="black-bg">{props.amount}</div>
    </div>
  );
};

export default Amount;
