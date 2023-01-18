import React from "react";

function Dish({ dish }) {
  return (
    <div>
      <h2>{dish.name}</h2>
      <p>$ {dish.price}</p>
    </div>
  );
}

export default Dish;
