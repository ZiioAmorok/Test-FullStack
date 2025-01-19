import React, { useState } from "react";
import LoginLogoutBtn from "./LoginLogoutBtn";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./Navigation.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && <div className="menu-toggle" onClick={toggleMenu}>
        <GiHamburgerMenu size={30} color="white" />
      </div>}

      <nav className={`navbar ${isOpen ? "open" : ""}`}>

        <div className="close-icon" onClick={toggleMenu}>
          <IoMdClose size={30} color="white" />
        </div>

        <Link to="/">
          HOME
        </Link>
        <Link to="/destinations">
          DESTINATIONS
        </Link>
        <MdLocationPin size={40} color="white" className="location-icon" />
        <Link to="/profile" >
          PROFILE
        </Link>

        <LoginLogoutBtn />
      </nav>
    </>
  );
}

export default Navbar;
