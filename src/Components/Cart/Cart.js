import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../redux/cartSlice";
import CartItem from "./CartItem";

function Cart() {
  const cartItems = useSelector(getCartItems);
  const totalPrice = useSelector(getTotalPrice);

  return (
    <div>
      <img
        className="cartIcon"
        src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"
        alt="icon"
      />
      {cartItems.map(cartItem => <CartItem key={cartItem.id} cartItem={cartItem} /> )}
      <h3 className="total">TOTAL: ${totalPrice}</h3>
    </div>
  );
}

export default Cart;
