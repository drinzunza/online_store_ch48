import './cart.css';
import { useContext } from 'react';
import DataContext from '../state/dataContext';

function Cart() {
  const cart = useContext(DataContext).cart;

  function getTotal() {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      let prod = cart[i];
      total += prod.quantity * prod.price;
    }

    return total.toFixed(2);
  }

  return (
    <div className="cart page">
      <h1>Your cart is ready!</h1>

      <div className="parent">
        <section className="list">
          {cart.map((prod) => (
            <div className="cart-prod">
              <img src={'/images/' + prod.image} alt="" />
              <h5>{prod.title}</h5>
              <label>{prod.price.toFixed(2)}</label>
              <label>{prod.quantity}</label>
              <label>total</label>
              <button className="btn btn-sm btn-danger">Remove</button>
            </div>
          ))}
        </section>

        <section className="menu">
          <h3>Total</h3>
          <h3>${getTotal()}</h3>

          <hr />
          <button className="btn btn-primary">Proceed to Payment</button>
        </section>
      </div>
    </div>
  );
}

export default Cart;
