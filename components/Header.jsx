import { Link } from 'react-router-dom';
import { FaUserGear } from 'react-icons/fa6';
import { FaMap } from 'react-icons/fa6';
import { FaLayerGroup } from 'react-icons/fa6';
import './Header.css';
import DropDown from './DropDown';

function Header() {
  return (
    <div className="header">
      <div className="dropdown">
        <DropDown />
      </div>
      <div className="itens">
        <Link to="/gerenciamentoDeUsuario">
          <span className="icon">
            <FaUserGear />
          </span>
        </Link>
        <span className="icon2">
          <FaMap />
        </span>
        <span className="icon3">
          <FaLayerGroup />
        </span>
      </div>
    </div>
  );
}
export default Header;
