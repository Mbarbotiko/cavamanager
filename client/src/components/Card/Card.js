import React from "react";
import "./Card.css";

export const Card = props => (
  <div class="card text-center">
    {props.children}
  </div>
);
