import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Homepage from "./views/homepage/homepage";
import Store from "./views/store/store";
import Payment from "./PaymentWidget";

const ReactWidget = Payment.driver("react", {
  React,
  ReactDOM
});

function PayCollect() {
  return (
    <>
      <ReactWidget amount="1000" />
      <button>Pay</button>
    </>
  );
}

export default function AppRouter() {
  return (
    <Router>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/store" component={Store} />
      <Route exact path="/pay" component={PayCollect} />
    </Router>
  );
}
