/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Logo from "../../Images/logo.svg";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <header>
        <div className="px-5 sm:px-10 md:px-20">
          <nav className="flex justify-between items-center py-6">
            <div className="header-logo w-1/4 md:w-36">
              <img src={Logo} alt="Fylo" />
            </div>
            <div className="header-menu">
              <ul className="flex">
                <li className="mx-2 md:px-4 nav-item nav-item-active">
                  <hr className="nav-item-border nav-hr-active" />
                  <a className="duration-700" href="#">
                    Features
                  </a>
                </li>
                <li className="mx-2 md:px-4 nav-item">
                  <hr className="nav-item-border" />
                  <a className="duration-700" href="#">
                    Team
                  </a>
                </li>
                <li className="mx-2 md:px-4 nav-item">
                  <hr className="nav-item-border" />
                  <a className="duration-700" href="#">
                    Sign In
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
