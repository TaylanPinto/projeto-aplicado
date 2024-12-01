import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../pages/assets/logo.png';
import anpLogo from '../pages/assets/anp-logo.png';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

function Navbar() {
  return (
    <div className="navbar">
      <Link to="/">
        <img className="logo-oilmap" src={logo} alt="OilMaps" />
      </Link>
      <img className="logo-anp" src={anpLogo} alt="logo anp" />
      <div className="sair">
        <Link to="/login">
          <span className="icon">
            <FaArrowRightFromBracket />
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
