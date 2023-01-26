import dataDishes from "../../data/dataDishes";

const CartItem = ({ cartItem }) => {
  //console.log(cartItem) to check
  const dishes = dataDishes.find((item) => item.id === cartItem.dishId);
  // console.log(dishes) to check
  return (
    <div>
      <p>{dishes.name}</p>
      <p>{cartItem.quantity} portion(s)</p>
    </div>
  );
};

export default CartItem;
