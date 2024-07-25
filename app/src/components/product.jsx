import { useContext, useState } from 'react';
import './product.css';
import QuantityPicker from './quantityPicker';
import DataContext from '../state/dataContext';

function Product(props) {
  const [quantity, setQuantity] = useState(1);

  let addProductToCart = useContext(DataContext).addProductToCart;

  function add() {
    // obj that contains all info + quantity
    let x = {
      ...props.info,
      quantity: quantity,
    };

    addProductToCart(x); // call context fn
  }

  function handleQuantityChange(val) {
    setQuantity(val);
  }

  function getTotal() {
    let total = props.info.price * quantity;
    return total.toFixed(2);
  }

  return (
    <div className="product">
      <img src={'/images/' + props.info.image} alt="" />

      <h5>{props.info.title}</h5>

      <label className="total">${getTotal()}</label>
      <label>${props.info.price.toFixed(2)}</label>

      <div className="controls">
        <QuantityPicker onChange={handleQuantityChange} />

        <button onClick={add} className="btn btn-sm btn-primary">
          <i class="fa-solid fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
}

export default Product;

/**
 *
 * create and Admin page
 *
 * - create the component (and css)
 * - put a heading on the component
 *
 * - create a route for in on app.js (/admin)
 *
 * - add a menu option on the navbar
 *
 */
