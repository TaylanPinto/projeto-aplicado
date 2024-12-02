import React from "react";
import { Link } from "react-router-dom";
import "./BarraLateralGer.css";

export default function BarraLateralGer({ setTermoBusca }) {
  return (
    <div className="barra-lateral">
      {/* Campo de busca */}
      <div className="campo-busca">
        <input
          type="text"
          placeholder="Buscar usuário..."
          onChange={(e) => setTermoBusca(e.target.value)} // Atualiza o estado do termo de busca
        />
      </div>

      {/* Botões */}
      <div className="botoesBarraLat">
        <Link to="/CadastroUsuario">
          <button>Cadastrar</button>
        </Link>
        <Link to="/CadastroUsuario">
          <button>Editar</button>
        </Link>
        <button>Remover</button>
      </div>
    </div>
  );
}
