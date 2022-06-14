import React from "react";
import "./Header.css";
import { Link} from "react-router-dom";
import { useStateValue } from "./StateProvider";
import {auth} from "../firebase"

//to import icons for basket and search button
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

function Header() {
  
  const [{ cart ,user }, dispatch] = useStateValue();

  const handleAuthentication =()=>{
    if(user){
      auth.signOut()
    }
  }
  return (
    <div className="header">
      {/*  added logo */}
      {/*  when we click logo it should go to home page */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
      </Link>

      {/* searchbar */}
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
      {/* added options */}
      <div className="header_nav">
        
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} className="header_option">
            <span className="header_optionOne">{!user ?"Guest":user.email}</span>
            <span className="header_optionTwo">{user? "Sign Out":"Sign In"}</span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionOne">Your</span>
          <span className="header_optionTwo">Prime</span>
        </div>

        <div className="header_option">
          <span className="header_optionOne">Returns</span>
          <span className="header_optionTwo">& Orders</span>
        </div>
        {/* added basket icon */}
        {/* when cart is clicked it should go to checkout page */}
        <Link to="/checkout">
          <div className="header_optionCart">
            <ShoppingCartIcon />
            <span className=" header_cartCount">{cart?.length}</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
