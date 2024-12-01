import { Link } from 'react-router-dom';
import styles from './navbar.module.css';
import logo from '../pages/assets/logo.png';
import anpLogo from '../pages/assets/anp-logo.png';
import { FaArrowRightFromBracket } from 'react-icons/fa6';

function Navbar() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="OilMaps" />
      </Link>
      <img className="anpLogo" src={anpLogo} alt="logo anp" />
      <Link to="/login">
        <FaArrowRightFromBracket />
      </Link>
    </div>
  );
}

export default Navbar;
