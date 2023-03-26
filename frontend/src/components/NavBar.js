import "./NavBar.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar =() =>
{
  return (
    <nav className="navbar">

      <ul className="navbar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <i className="fas fa-shopping-cart"></i>
            <span>
              Cart <span className="cartlogo__badge">0</span>
            </span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;