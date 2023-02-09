import React from "react";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { NavLink } from "react-router-dom";
import { auth } from "../../firebase/firebase.utils";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <NavLink className="logo-container" to="/">
      <Logo className="logo" />
    </NavLink>
    <div className="options">
      <NavLink className="option" to="/shop">
        SHOP
      </NavLink>
      <NavLink className="option" to="/contacts">
        CONTACTS
      </NavLink>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <NavLink className="option" to="/signin">
          SIGN-IN 🚀
        </NavLink>
      )}
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
);

const mapStateToPorps = ({ user: { currentUser }, cart: { hidden } }) => ({
  currentUser,
  hidden,
});

export default connect(mapStateToPorps)(Header);
