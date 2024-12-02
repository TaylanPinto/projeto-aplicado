import React from "react";

export default function CardUsuario({ usuarios, onCheckboxChange }) {
  return (
    <table className="cardUsuario">
      <thead>
        <tr>
          <th>
            <input type="checkbox" disabled /> {}
          </th>
          <th>USUÁRIO</th>
          <th>E-MAIL</th>
          <th>PROFISSÃO</th>
        </tr>
      </thead>
      <tbody>
        {usuarios.map((usuario, index) => (
          <tr key={index}>
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
  );
}
