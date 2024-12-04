import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BarraLateralGer.css';
import { RiUserSearchFill } from 'react-icons/ri';

export default function BarraLateralGer({
  usuarios,
  selecionados,
  setTermoBusca,
  setUsuarios,
}) {
  const navigate = useNavigate();

  const handleEditar = () => {
    if (selecionados.length === 1) {
      let usuario = usuarios.filter((usuario) =>
        selecionados.includes(usuario.nome),
      );

      navigate('/CadastroUsuario', { state: { usuario: usuario[0] } });
      return;
    }
  };

  const handleRemover = () => {
    if (selecionados.length === 0) {
      alert('Por favor, selecione pelo menos um usuário para remover.');
      return;
    }

    const novosUsuarios = usuarios.filter(
      (usuario) => !selecionados.includes(usuario.nome),
    );

    localStorage.setItem('dadosUsuario', JSON.stringify(novosUsuarios));

    setUsuarios(novosUsuarios);
  };

  return (
    <div className="barra-lateral">
      <div className="campo-busca">
        <div className="outra">
          <RiUserSearchFill className="busca" />
        </div>
        <input
          type="text"
          placeholder="Buscar usuário..."
          onChange={(e) => setTermoBusca(e.target.value)}
        />
      </div>
      <div className="botoesBarraLat">
        <button onClick={() => navigate('/CadastroUsuario')}>Cadastrar</button>
        <button onClick={() => navigate('/CadastroUsuario')}>Editar</button>
        <button onClick={handleRemover}>Remover</button>
      </div>
    </div>
  );
}
