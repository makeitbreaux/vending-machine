import React, { useState } from "react";
import PopcornImg from "./Popcorn.png";
import { Link } from "react-router-dom";
import Message from "./Message";
import "./Popcorn.css";

function Popcorn() {

  const [buckets, setBuckets] = useState([]);

  function handleClick() {
    const x = window.innerWidth * Math.random();
    const y = window.innerHeight * Math.random();
    setBuckets(prevBuckets => [...prevBuckets, { x, y }]);
  }

  const b = buckets.map((bucket, i) => (
    <img
      key={i}
      src={PopcornImg}
      className="bucket"
      style={{ top: `${bucket.y}px`, left: `${bucket.x}px` }}
      alt="bucket of popcorn"
    />
  ));
  return (
    <div className="Popcorn">
      <Message>
        <h1>buckets eaten: {buckets.length}</h1>
        <button onClick={handleClick}>nom nom nom</button>
        <h1>
          <Link to="/">go back</Link>
        </h1>
      </Message>
      {b}
    </div>
  );
}

export default Popcorn;