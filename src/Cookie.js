import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import CookieImg from "./Cookie.png";
import "./Cookie.css";

function Cookie() {
  return (
    <div className="Cookie">
      <img src={CookieImg} alt="chocolate chip cookie" />
      <Message>
        <h1>OMG COOKIIIEEEEEE</h1>
        <h1><Link to="/">go back</Link></h1>
      </Message>
      <img src={CookieImg} alt="chocolate chip cookie" />
    </div>
  );
}

export default Cookie;
