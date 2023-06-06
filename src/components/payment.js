import React from "react";
import "./payment.css";
import { useState } from "react";
function Payment(props) {
  const [activeIndex, setActiveIndex] = useState(null);
  function optionSelected(index) {
    setActiveIndex(index);
    props.selectChanger(true);
  }
  return (
    <div className="container">
      <div
        className={`flex-item ${activeIndex === 0 ? "active" : ""}`}
        onClick={() => optionSelected(0)}
        style={{ borderColor: activeIndex === 0 ? "blue" : "grey" }}
      >
        <div style={{ padding: "80px" }}>Online</div>
      </div>
      <div
        className={`flex-item ${activeIndex === 0 ? "active" : ""}`}
        onClick={() => optionSelected(1)}
        style={{ borderColor: activeIndex === 1 ? "blue" : "grey" }}
      >
        <div style={{ padding: "80px" }}>Cash</div>
      </div>
      <div
        className={`flex-item ${activeIndex === 0 ? "active" : ""}`}
        onClick={() => optionSelected(2)}
        style={{ borderColor: activeIndex === 2 ? "blue" : "grey" }}
      >
        <div style={{ padding: "80px" }}>Cheque</div>
      </div>
    </div>
  );
}

export default Payment;
