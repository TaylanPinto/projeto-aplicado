import { Link } from 'react-router-dom';
import { FaUserGear } from 'react-icons/fa6';
import { FaMap } from 'react-icons/fa6';
import { FaLayerGroup } from 'react-icons/fa6';
import { FaChevronDown } from 'react-icons/fa6';

function Header() {
  return (
    <div>
      <div className="menu">
        <button onClick={() => {}} className="menu-button">
          <span>Selecione</span>
          <FaChevronDown />
        </button>
      </div>
      <Link to="/gerenciamentoDeUsuario">
        <FaUserGear />
      </Link>
      <FaMap />
      <FaLayerGroup />
    </div>
  );
}
export default Header;
