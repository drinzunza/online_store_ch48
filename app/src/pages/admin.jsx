import { useState } from 'react';
import './admin.css';

/**
 * create the div/form with input fields for title, image, price, category and a button
 * create a handleProduct function similar to handleCoupon
 * set the onBlur and a name to each field on the form
 * create a saveProduct fn that console logs the product var
 */

function Admin() {
  const [product, setProduct] = useState({
    title: '',
    image: '',
    price: '',
    category: '',
  });

  const [coupon, setCoupon] = useState({
    code: '',
    discount: '',
  });

  function handleProduct(e) {
    const text = e.target.value;
    const name = e.target.name;

    let copy = { ...product };
    copy[name] = text;
    setProduct(copy);
  }

  function handleCoupon(e) {
    const text = e.target.value; // the value of the field
    const name = e.target.name; // what input field changed?

    // create a copy
    let copy = { ...coupon };
    // modify the copy
    copy[name] = text;
    // set the copy back
    setCoupon(copy);
  }

  function saveCoupon() {
    console.log(coupon);
  }

  function saveProduct() {
    console.log(product);
  }

  return (
    <div className="admin page">
      <h1>Store Administration</h1>

      <div className="parent">
        <section className="sec-prods">
          <h3>Products</h3>

          <div className="form">
            <div>
              <label className="form-label">Title</label>
              <input onBlur={handleProduct} name="title" type="text" className="form-control" />
            </div>

            <div>
              <label className="form-label">Image</label>
              <input onBlur={handleProduct} name="image" type="text" className="form-control" />
            </div>

            <div>
              <label className="form-label">Price</label>
              <input onBlur={handleProduct} name="price" type="text" className="form-control" />
            </div>

            <div>
              <label className="form-label">Category</label>
              <input onBlur={handleProduct} name="category" type="text" className="form-control" />
            </div>

            <button onClick={saveProduct} className="btn btn-dark">
              <i class="fa-regular fa-floppy-disk"></i>
              Save Product
            </button>
          </div>
        </section>

        <section className="sec-coupons">
          <h3>Coupons</h3>

          <div className="form">
            <div>
              <label className="form-label">Code</label>
              <input onBlur={handleCoupon} name="code" type="text" className="form-control" />
            </div>

            <div>
              <label className="form-label">Discount</label>
              <input onBlur={handleCoupon} name="discount" type="text" className="form-control" />
            </div>

            <button onClick={saveCoupon} className="btn btn-dark">
              <i class="fa-regular fa-floppy-disk"></i>
              Save Coupon
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Admin;
