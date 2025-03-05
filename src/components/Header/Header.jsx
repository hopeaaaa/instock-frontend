import { NavLink } from "react-router-dom";
import inStockLogo from "../../assets/logo/InStock-Logo_1x.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__instock">
        <NavLink to="/" className="temporary-link">
          <img
            src={inStockLogo}
            alt="InStock Logo"
            className="header__hero-image"
          />
        </NavLink>
      </div>
      <ul className="header__nav-bar">
        <li className="header__warehouse">
          <NavLink to="/" className="header__nav-link">
            Warehouses
          </NavLink>
        </li>
        <li className="header__inventory">
          <NavLink to="/inventory" className="header__nav-link">
            Inventory
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Header;
