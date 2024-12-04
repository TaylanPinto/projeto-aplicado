import { Link } from 'react-router-dom';
import { FaUserGear, FaMap, FaLayerGroup } from 'react-icons/fa6';
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
      </div>
    </div>
  );
}

export default Header;
