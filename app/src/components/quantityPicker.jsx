import { useState } from 'react';
import './quantityPicker.css';

function QuantityPicker() {
  const [quantity, setQuantity] = useState(1);

  function decrease() {    
    let val = quantity - 1;
    if(val > 0) {
        setQuantity(val);
    }
  }

  function increase() {
    let val = quantity + 1;
    setQuantity(val);
  }

  return (
    <div className="qt-picker">
      <button className='btn btn-sm btn-outline-success' disabled={quantity === 1} onClick={decrease}>-</button>

      <label>{quantity}</label>

      <button className='btn btn-sm btn-outline-success' onClick={increase}>+</button>
    </div>
  );
}

export default QuantityPicker;


/**
 * 
 * create an increase fn, that incraeses quantity by 1
 * call the fn on the click of the + button
 */



/**
 * create an About page
 * with a h2 with your name
 * a div with your email and a fake phone number
 * 
 * 
 * 
 * 
 * render the About page below catalog on app.js
 */