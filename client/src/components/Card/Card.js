import React from "react";
import DeleteBtn from "../../components/DeleteBtn";
import { Link } from "react-router-dom";
import API from "../../utils/API";



export const Card = props => (
  <div class="card text-center">
    <div class="card-header">
      {props.type}
    </div>
    <div class="card-body">
      <Link to={"/dishes/" + props.link}>
        <h5 class="card-title">{props.title}</h5>
      </Link>
      <p class="card-text">{props.description}</p>
    </div>
    <div class="card-footer text-muted">
      {props.date}
    </div>  
    {/* <Link to={"/dishes/" + dish._id}>
<DeleteBtn onClick={() => this.deleteDish(dish._id)} />
</Link> */}

  </div>
);



