import React from "react";
import Header from "./header";
import Amount from "./amount";
import Confirm from "./confirm";
import Payment from "./payment";
import { useState } from "react";
import { useLocation } from "react-router-dom";
function L2(props) {
  let location = useLocation();
  const [select, setSelect] = useState(false);
  return (
    <div>
      <Header />
      <Amount amount={location.state.amount} />
      <Payment select={select} selectChanger={setSelect} />
      <Confirm
        select={select}
        amount={location.state.amount}
        name={location.state.name}
        bill={location.state.Bill}
      />
    </div>
  );
}

export default L2;
