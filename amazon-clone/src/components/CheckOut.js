import React from "react";
import "./CheckOut.css";
import Subtotal from "./Subtotal";
import {useStateValue} from"./StateProvider"
import CheckOutProduct from "./CheckOutProduct";


function CheckOut() {
  const [{cart,user}] =useStateValue()
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://m.media-amazon.com/images/G/01/AdProductsWebsite/images/AUX/ILB_BrightColors_NotApproved._TTW_.jpg"
          alt=""
        />
      </div>
      <h3>hello {user?.email}</h3>
        <h2 className="checkout_title" >Your Cart</h2>

        {cart.map(item=>(
         < CheckOutProduct

         id ={item.id}
         title ={item.title}
         image ={item.image}
         price ={item.price}
         rating ={item.rating}
         />
        ))}
        
      

      <div className="checkout_right">
        <h2>
          <Subtotal/>
        </h2>
      </div>
    </div>
  );
}

export default CheckOut;
