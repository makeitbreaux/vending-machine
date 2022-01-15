import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import SparklingWaterImg from "./SparklingWater.png";
import "./SparklingWater.css";

function SparklingWater() {
  return (
    <div className="SparklingWater">
      <img src={SparklingWaterImg} alt="can of sparkling water" />
      <Message>
        <h1>OMG SPARKLY</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>
      <img src={SparklingWaterImg} alt="can of sparkling water" />
    </div>
  );
}

export default SparklingWater;
