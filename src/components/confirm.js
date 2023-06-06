import React from "react";
import "./confirm.css";
import { useNavigate } from "react-router-dom";
// Footer component
const Confirm = (props) => {
  let navigate = useNavigate();
  function confirm() {
    navigate("/cash", {
      state: { amount: props.amount, name: props.name, bill: props.bill },
    });
  }
  return (
    <div
      className={props.select ? "color-blue" : "color-white"}
      onClick={confirm}
    >
      Confirm
    </div>
  );
};

export default Confirm;
