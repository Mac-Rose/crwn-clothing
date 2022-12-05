import React from "react";
import "./header.styles.scss";

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { NavLink } from "react-router-dom";

const Header = () => (
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
    </div>
  </div>
);

export default Header;
