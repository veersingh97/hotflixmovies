import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import Logo from "../../Images/logo3.png";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
  const [isToggle, setIsToggle] = useState(false);
  return (
    <div className="header">
      <Link to="/">
        <img src={Logo} alt="Hotflix Logo" className="header-logo"></img>
      </Link>

      <div className={isToggle ? "headerRight active" : "headerRight"}>
        <Link to="/movies/popular" style={{ textDecoration: "none" }}>
          <span>Popular</span>
        </Link>
        <Link to="/movies/top_rated" style={{ textDecoration: "none" }}>
          <span>Top Rated</span>
        </Link>
        <Link to="/movies/upcoming" style={{ textDecoration: "none" }}>
          <span>Upcoming</span>
        </Link>
        <Link
          to="/login"
          style={{ textDecoration: "none" }}
          className="login"
          onClick={() => setIsToggle(false)}
        >
          Log in
        </Link>
      </div>

      <div className="bars active" onClick={() => setIsToggle(!isToggle)}>
        {isToggle ? <RiCloseFill /> : <RiMenu3Fill />}
      </div>
    </div>
  );
};

export default Header;
