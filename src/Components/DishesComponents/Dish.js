import React from "react";

function Dish({ dish }) {
  return (
    <div>
        <img src={`${dish.img}.jpg`}/>
      <h2>{dish.name}</h2>
      <p>$ {dish.price}</p>
      {/*To fix later*/}
      <button>HOW MANY PORTIONS?</button>
      <button>Add to cart</button>
    </div>
  );
}

export default Dish;
