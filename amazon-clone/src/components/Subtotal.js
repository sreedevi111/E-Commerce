import React from 'react'
import "./Subtotal.css"
//for handling currency formats
import CurrencyFormat from "react-currency-format"
import {useStateValue} from "./StateProvider"
import { getCartTotal } from './Reducer'
import { useNavigate } from 'react-router-dom'


//calculates the total and display it
function Subtotal() {
  const history = useNavigate()
  const [{cart}] = useStateValue()
  return (
    <div className='subtotal'>
     <CurrencyFormat
     renderText={(value)=>(
         //rendered on the screen
         <>
         <p>
        Subtotal({cart.length} items):<strong>{value}</strong>
         </p>
         <small className='subtotal_gift'>
             <input type="checkbox"/>
             this order contains a gift
             </small>
         </>
     )}
     decimalScale={2}
        value={getCartTotal(cart)} // Price 
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button onClick={e => history('/payment')}>Proceed to Checkout</button>
    </div>
  )
}

export default Subtotal