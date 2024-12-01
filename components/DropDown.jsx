import React from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import './DropDown.css';

export default function DropDown() {
  return (
    <div className="menu">
      <button onClick={() => {}} className="menu-button">
        <span>Selecione</span>
        <span className="icon">
          <FaChevronDown />
        </span>
      </button>
    </div>
  );
}
