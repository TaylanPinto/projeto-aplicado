import React, { useEffect, useState } from "react";
import BarraLateralGer from "../components/BarraLateralGer";
import CardUsuario from "../components/CardUsuario";
import "./GerenciamentoDeUsuario.css";  

export default function GerenciamentoDeUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]);
  const [termoBusca, setTermoBusca] = useState("");

  useEffect(() => {
    const dadosExistentes = localStorage.getItem("dadosUsuario");
    if (dadosExistentes) {
      const usuarios = JSON.parse(dadosExistentes);
      setUsuarios(usuarios);
      setUsuariosFiltrados(usuarios);
    }
  }, []);

  useEffect(() => {
    const filtrados = usuarios.filter((usuario) =>
      usuario.nome.toLowerCase().includes(termoBusca.toLowerCase())
    );
    setUsuariosFiltrados(filtrados);
  }, [termoBusca, usuarios]);

  const handleCheckboxChange = (e, usuario) => {
    if (e.target.checked) {
      setSelecionados((prev) => [...prev, usuario.nome]);
    } else {
      setSelecionados((prev) => prev.filter((nome) => nome !== usuario.nome));
    }
  };

  return (
    <div className="page-container">
      <div className="content">
        <div className="BarraLateral">
          <BarraLateralGer setTermoBusca={setTermoBusca} />
        </div>
        <div className="cardsUsuarios">
          {usuariosFiltrados.length > 0 ? (
            <CardUsuario usuarios={usuariosFiltrados} onCheckboxChange={handleCheckboxChange} />
          ) : (
            <div className="no-users-box">
              <p>Nenhum usuário encontrado.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
