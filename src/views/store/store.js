import React from "react";
import { Link } from "react-router-dom";

export default function Store({ location }) {
  // const { state } = location;
  console.log(location)
  return (
    <div>
      <h1>THIS IS STORE PAGE</h1>
      <Link to="/">click me to go to home page</Link>

      {/* <div>MACBOOK IMAGE</div>
      <div>{state.name}</div>
      <div>{state.price}</div> */}
    </div>
  );
}
