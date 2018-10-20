import React from "react";
import "./DeleteBtn.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const DeleteBtn = props => (
  <div className='delete'>
  <span className="delete-btn" {...props}>
    ✗ Delete from Menu
  </span>
  </div>
);

export default DeleteBtn;
