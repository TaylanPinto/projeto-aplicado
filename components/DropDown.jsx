import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import { FaChevronDown } from 'react-icons/fa6';
import './DropDown.css';

export default function DropDown() {
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState('Selecione');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchCSV = async () => {
      try {
        const response = await fetch('/Tabela_pocos_2024_Dezembro_01.csv');
        const reader = await response.text();
        Papa.parse(reader, {
          header: true,
          delimiter: ';',
          complete: (results) => {
            setOptions(results.data);
          },
        });
      } catch (error) {
        console.error('Erro ao carregar o CSV:', error);
      }
    };

    fetchCSV();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu">
      <button onClick={toggleDropdown} className="menu-button">
        <span className="select">{selected}</span>
        <span className="icon">
          <FaChevronDown />
        </span>
      </button>
      {isOpen && (
        <div
          className="dropdown-content"
          style={{
            position: 'absolute',
            zIndex: 1000,
            backgroundColor: 'white',
            border: '1px solid #ccc',
          }}
        >
          {options.map((option, index) => (
            <div
              key={index}
              className="dropdown-item"
              onClick={() => {
                setSelected(option.POCO);
                setIsOpen(false);
              }}
            >
              {option.POCO} {}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
