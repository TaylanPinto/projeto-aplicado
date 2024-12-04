import React, { useEffect, useState } from 'react';
import BarraLateralGer from '../components/BarraLateralGer';
import CardUsuario from '../components/CardUsuario';
import { RiUserSearchFill } from 'react-icons/ri';

export default function GerenciamentoDeUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  const [selecionados, setSelecionados] = useState([]); // Usuários selecionados
  const [termoBusca, setTermoBusca] = useState(''); // Termo de busca
  const [usuariosFiltrados, setUsuariosFiltrados] = useState([]); // Usuários filtrados

  useEffect(() => {
    const dados = JSON.parse(localStorage.getItem('dadosUsuario')) || [];
    setUsuarios(dados);
    setUsuariosFiltrados(dados);
  }, []);

  useEffect(() => {
    const filtrados = usuarios.filter((usuario) =>
      usuario.nome.toLowerCase().includes(termoBusca.toLowerCase()),
    );
    setUsuariosFiltrados(filtrados);
  }, [termoBusca, usuarios]);

  const handleCheckboxChange = (e, usuario) => {
    if (e.target.checked) {
      setSelecionados((prev) => [...prev, usuario.id]);
    } else {
      setSelecionados((prev) => prev.filter((id) => id !== usuario.id));
    }
  };

  return (
    <div className="page-container">
      <div className="content">
        <div className="BarraLateral">
          <BarraLateralGer
            usuarios={usuarios}
            selecionados={selecionados}
            setTermoBusca={setTermoBusca}
            setUsuarios={setUsuarios}
          />
        </div>
        <div className="cardsUsuarios">
          {usuariosFiltrados.length > 0 ? (
            <CardUsuario
              usuarios={usuariosFiltrados}
              onCheckboxChange={handleCheckboxChange}
            />
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
