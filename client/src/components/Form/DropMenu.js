import React from "react";
import "./Form.css";

export const DropMenu = props => (
  <div className="dropdown">
    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {props.label}
    </button>
    <div className="dropdown-menu" aria-labelledby="dropdownMenu2">


      <button className="dropdown-item" type="button" value='Appetizer'>{props.drop1}</button>
      <button className="dropdown-item" type="button" value='Entree'>{props.drop2}</button>
      <button className="dropdown-item" type="button" calue='Drinks'>{props.drop3}


        {/*    
     <button className="dropdown-item" type="button"value= "Appetizer">Appetizer</button>
     <button className="dropdown-item" type="button" value="Entree">Entree</button>
     <button className="dropdown-item" type="button" value="Drinks">Drinks */}

      </button>
    </div>
  </div>
);
