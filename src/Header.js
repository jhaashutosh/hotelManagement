import React from "react";
import "./stylesheets/Header.css";
import LanguageIcon from "@mui/icons-material/Language";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <Link to="/">
          <img
            src={require("./images/logo.png")}
            alt=""
            className="header__icon"
          />
        </Link>
        <p className="portfolio_name">Hotel Management System</p>
      </div>

      <div className="header__center">
        <input type="text" />
        <SearchIcon />
      </div>
      <div className="header__right">
        <LanguageIcon className="language_icon" />
        <ExpandMoreIcon className="dropdown_icon" />
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
