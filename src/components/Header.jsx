import React from "react";
import "./Header.css";
import mainLogo from "../assets/Logo.png";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "../stores/StateProvider";
import { auth } from "../adapter/firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header_logo"
          src={mainLogo}
          alt="Yahya Syabani Ecommerce"
        />
      </Link>

      <div className="header_nav">
        <Link style={{ textDecoration: "inherit" }} to={!user && "/login"}>
          <div onClick={handleAuthenticaton} className="header_option">
            <span className="header_optionLineOne">Hello </span>
            <span className="header_optionLineTwo">
              {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="header_option">
          <span className="header_optionLineOne">Return</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>

        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Account</span>
        </div>
        <Link style={{ textDecoration: "inherit" }} to="/checkout">
          <div className="header_optionBasket">
            <ShoppingBasketIcon fontSize="large" />
            <span className="header_optionLineTwo header_basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>

      <div className="header_search">
        <input className="header_searchInput" type="text" />
        <SearchIcon className="header_searchIcon" />
      </div>
    </div>
  );
}

export default Header;
