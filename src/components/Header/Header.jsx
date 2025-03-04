import { Link } from "react-router-dom";
import inStockLogo from "../../assets/logo/InStock-Logo_1x.png";
import "./Header.scss";

function Header() {
  return (
    <div className="header">
      <div className="header__instock">
        <a href="/" className="temporary-link">
          <img
            src={inStockLogo}
            alt="InStock Logo"
            className="header__hero-image"
          />
        </a>
      </div>
      <div className="header__redirect">
        <h2 className="header__warehouse">Warehouses</h2>
        <h2 className="header__inventory">Inventory</h2>
      </div>
    </div>
  );
}

export default Header;
