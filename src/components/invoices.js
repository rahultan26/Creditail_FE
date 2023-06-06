import React from "react";
import "./invoices.css";
import ListOfInvoices from "./listOfInvoices";
import { useEffect, useState } from "react";
const Invoices = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3005/invoices", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="bg">
      <div className="background">invoice</div>
      <div className="invoiceContainer">
        {data.map((item) => (
          <ListOfInvoices key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Invoices;
