import React from "react";
import "./Card.css";

export const Card = props => (
  <div className="card text-center">
    {props.children}
  </div>
);
