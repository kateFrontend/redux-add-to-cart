import { useSelector } from 'react-redux';
import { getcartItems } from '../../redux/cartSlice';
import CartItem from './CartItem'

function Cart() {

  const cartItems = useSelector(getcartItems)

  return (
    <div>
      <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png"/> 
      {cartItems.map(cartItem => <CartItem cartItem={cartItem}/>)}
      <CartItem/>
    </div>
  )
}

export default Cart