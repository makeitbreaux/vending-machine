import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./VendingMachine.css";
import vendingMachineImg from "./VendingMachine.png";

function VendingMachine() {
  return(
    <div
      className="VendingMachine"
      style={{ backgroundImage: `url(${vendingMachineImg})` }}>
      <Message>
        <h1>hello i am a vending machine. what would you like to eat?</h1>
      </Message>
      <Message>
        <h1><Link to="/cookie">Cookie</Link></h1>
        <h1><Link to="/popcorn">Popcorn</Link></h1>
        <h1><Link to="/sparklingWater">Sparkling Water</Link></h1>
      </Message>
    </div>
  );
}

export default VendingMachine;