import React from 'react';
import { Link } from 'react-router-dom';
import { FaUserGear,FaCircleInfo } from 'react-icons/fa6';
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
        <Link to="/About">
        <span className="icon2">
        <FaCircleInfo />
        </span>
        </Link>
      </div>
    </div>
  );
}

export default Header;
