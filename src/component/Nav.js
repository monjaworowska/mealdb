import { useState } from "react";
import cx from "classnames";
import { NavLink } from "react-router-dom";
const Nav = () => {
  const [isActive, toggleIsActive] = useState(0);
  return (
    <nav className="navbar is-light mb-3">
      <div className="navbar-brand">
        <NavLink className="navbar-item" to="/">
          MealDB
        </NavLink>
        <div
          className={cx("navbar-burger", isActive ? "is-active" : null)}
          onClick={() => toggleIsActive(!isActive)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div
        className={cx("navbar-menu", isActive ? "is-active" : null)}
        onClick={() => toggleIsActive(!isActive)}
      >
        <NavLink className="navbar-item" to="/categories">
          Categories
        </NavLink>
        <NavLink className="navbar-item" to="/countries">
          Countries
        </NavLink>
        <NavLink className="navbar-item" to="/ingredients">
          Ingredients
        </NavLink>
        <NavLink className="navbar-item" to="/find">
          Find
        </NavLink>
      </div>
    </nav>
  );
};

export default Nav;
