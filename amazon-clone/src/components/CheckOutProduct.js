import React from "react";
import "./CheckOutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckOutProduct({ id, image, title, price, rating }) {
 
    const [dispatch]=useStateValue()
 //removing items from the cart
    const removeFromCart=()=>{
        dispatch({
            type:"REMOVE_FROM_CART",
            id:id,
        })

 }
 
    return (
    <div className="checkoutproduct">
      <img className="checkoutproduct_image" src={image} alt=""/>

      <div className="checkoutproduct_info">
        <p className="checkoutproduct_title">{title}</p>
     <p className="checkoutproduct_price">
         <small>₹</small>
         <strong>{price}</strong>
         </p>
         <div className="checkoutproduct_rating">
         {Array(rating)
          .fill() //fills
          .map((_, i) =>( //map through it
          <p>★</p>
          ))} 
             </div>
     <button onClick={removeFromCart}> Remove from Cart</button>
      </div>
    </div>
  );
}

export default CheckOutProduct;
