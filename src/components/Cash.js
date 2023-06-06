import React from "react-dom";
import "./cash.css";
import { TiTick } from "react-icons/ti";
import { useLocation } from "react-router-dom";
function Cash() {
  const location = useLocation();
  return (
    <div className="cash_body">
      <div className="tick_circle_fade">
        <div className="tick_circle">
          <TiTick className="tick" />
        </div>
      </div>
      <div className="invoice_no">{location.state.bill}</div>
      <div className="amount">Rs. {location.state.amount}</div>
      <div className="transaction_details">{location.state.name}</div>
      <div className="sep_line">---------------------------------------</div>
      <div className="last_line">PAID BY CASH</div>
      <div className="redirect">Redirecting to homescreen</div>
    </div>
  );
}

export default Cash;
