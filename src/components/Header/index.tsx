import React from "react";
import { NavLink } from "react-router-dom";
import { BsCartFill } from "react-icons/bs";
import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <h4>
            Fashion<span>Hub</span>
          </h4>
        </div>
        <nav className="nav">
          <ul className="nav__list">
            <li className="nav__list--item">
              <NavLink to={"/"} className="nav__link">
                Home
              </NavLink>
            </li>
            <li className="nav__list--item">
              <NavLink to={"/store"} className="nav__link">
                Store
              </NavLink>
            </li>
            <li className="nav__list--item">
              <NavLink to={"/about"} className="nav__link">
                About
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="header__cart">
          <div className="header__cart--overlay">
            <span>4</span>
          </div>
          <BsCartFill />
        </div>
      </div>
    </header>
  );
};
