import React from "react";
import "./CardUsuario.css";  

export default function CardUsuario({ usuarios, onCheckboxChange }) {
  return (
    <div className="card-container">
      <table className="cardUsuario">
        <thead>
          <tr>
            <th>
              <input type="checkbox" disabled />
            </th>
            <th>USUÁRIO</th>
            <th>E-MAIL</th>
            <th>PROFISSÃO</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario, index) => (
            <tr key={usuario.id}>
              <td>
                <input
                  type="checkbox"
                  onChange={(e) => onCheckboxChange(e, usuario)}
                />
              </td>
              <td>{usuario.nome}</td>
              <td>{usuario.email}</td>
              <td>{usuario.profissao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}