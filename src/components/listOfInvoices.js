import React from "react";
import "./listOfInvoices.css";
import { useNavigate } from "react-router-dom";
const ListOfInvoices = (props) => {
  let navigate = useNavigate();
  function invoiceClick() {
    navigate("/l2", {
      state: {
        amount: props.item.InvoiceAmount,
        name: props.item.RetailerName,
        Bill: props.item.BillNo,
      },
    });
  }
  return (
    <div>
      <div className="cellContainer" onClick={invoiceClick}>
        <div className="left">{props.item.BillNo}</div>
        <div className="right">{props.item.InvoiceAmount}</div>
      </div>
      <div className="bottom">{props.item.RetailerName}</div>
    </div>
  );
};
// {props.item.Brand} {props.item.Brand}

export default ListOfInvoices;
