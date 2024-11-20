import React, { useState } from "react";
import AD_Logo from "../../Assets/Cover/AalokDrishty_Logo.png";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Dropdown from "../Drop-Down-Menu/ActivityDropDown";

function Navbar() {
  {
    const [dropdown, setDropdown] = useState(false);
    const [clicked, setClicked] = useState(false);
    return (
      <nav className="NavbarItems">
        <Link data-testid="link" to="/">
          <span>
            <img id="AD-logo" src={AD_Logo}></img>
          </span>
        </Link>

        <div className="menu-icons" onClick={() => setClicked(!clicked)}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            if (item.title === "Work") {
              return (
                <li
                  key={item.id}
                  className={item.CName}
                  onMouseEnter={() => setDropdown(true)}
                  onMouseLeave={() => setDropdown(false)}
                >
                  <Link id="activity-menu" to={item.url}>
                    <i className={item.icon}></i> {item.title}
                    <i className={item.ddIcon} id="activity-drop-menu"></i>
                  </Link>
                  {dropdown && <Dropdown />}
                </li>
              );
            }

            return (
              <li key={index}>
                <Link className={item.CName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                  <i className={item.ddIcon}></i>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
