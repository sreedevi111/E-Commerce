import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";
//passing id title image price image and ratings as props which is used by the components to render
function Product({id,title,image,price,rating}) {
 
  const [dispatch] = useStateValue()
  
  //addtocart
  const addToCart = ()=>{
    //dispatch item in to data layer
    dispatch({
      type:"ADD_TO_CART",
      item:{
        id:id,
        title:title,
        image:image,
        price:price,
        rating:rating
      }
    })
  }
  
  
  return (
    <div className="product">

      <div className="product_info">

        <p>{title}</p>
        <p className="product_price">

          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          
          {Array(rating)
          .fill()
          .map((_, i) =>(
          <p>★</p>
          ))}
        </div>
      </div>

      <img src={image} alt=""/>

      <button onClick={addToCart}>Add to Cart</button>
    
    </div>
  );
}

export default Product;
