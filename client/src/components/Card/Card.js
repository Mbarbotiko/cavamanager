import React from "react";

export const Card = props => (
  <div class="card text-center">
  <div class="card-header">
  </div>
  <div class="card-body">
    <h5 class="card-title">{props.children}</h5>
    <p class="card-text">{props.children}</p>
  </div>
  <div class="card-footer text-muted">
  </div>
</div>
);
