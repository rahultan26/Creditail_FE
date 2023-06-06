import React from "react";
import Header from "./components/header";
import Confirm from "./components/confirm";
import Invoices from "./components/invoices";
import ListOfInvoices from "./components/listOfInvoices";

function Homepage() {
  return (
    <div>
      <Header />
      <Invoices />
      <ListOfInvoices />
      <Confirm />
    </div>
  );
}

export default Homepage;
