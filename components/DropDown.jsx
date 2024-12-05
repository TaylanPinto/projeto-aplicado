import React, { useState, useEffect } from "react";
import Papa from "papaparse";
import "./DropDown.css";

export default function DropDown() {
  const [options, setOptions] = useState([]);
  const [selectedPoco, setSelectedPoco] = useState(null);

  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch("/Tabela_pocos_2024_Dezembro_01.csv");
      const reader = await response.text();
      Papa.parse(reader, {
        header: true,
        complete: (results) => {
          setOptions(results.data);
        },
      });
    };
    fetchCSV();
  }, []);

  const handleSelect = (e) => {
    const selected = options.find((option) => option.POCO === e.target.value);
    setSelectedPoco(selected);
  };

  return (
    <div className="dropdown">
      <select onChange={handleSelect} defaultValue="">
        <option value="" disabled>
          Selecione
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.POCO}>
            {option.POCO}
          </option>
        ))}
      </select>
      {selectedPoco && <DetalhesPoco poco={selectedPoco} />}
    </div>
  );
}

function DetalhesPoco({ poco }) {
  return (
    <div className="detalhes-container">
      <h3>{poco.POCO}</h3>
      <p>
        <strong>Estado:</strong> {poco.ESTADO}
      </p>
      <p>
        <strong>Bacia:</strong> {poco.BACIA}
      </p>
      <p>
        <strong>Categoria:</strong> {poco.CATEGORIA}
      </p>
      <p>
        <strong>Data de Conclusão:</strong> {poco.CONCLUSAO}
      </p>
      <p>
        <strong>Situação:</strong> {poco.SITUACAO}
      </p>
    </div>
  );
}
