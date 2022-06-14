import React from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckOutProduct from "./CheckOutProduct";
import { Link } from "react-router-dom";

function Payment() {
  const [{ cart, user }] = useStateValue();
  <h1>
    Checkout (<Link to="/checkout">{cart?.length} items</Link>)
  </h1>;
  return (
    <div className="payment">
      <div className="payment_container">
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery Address</h3>
            <div className="payment_address">
              <p>{user?.email}</p>
              <p>123 city</p>
              <p>456 country</p>
            </div>
          </div>
        </div>

        <div className="payment_section"></div>
        <div className="payment_title">
          <h3>Items For Delivery</h3>

          <div className="payment_items">
            {cart.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>

        <div className="payment_section"></div>
        <div className="payment_title">
          <button className="payment_button">Proceed to Payment</button>
          <div className="payment_details"></div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
