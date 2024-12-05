import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './BarraLateralGer.css';
import { RiUserSearchFill } from 'react-icons/ri';
import ModalConfirmacao from './Confirmacao';

export default function BarraLateralGer({
  usuarios,
  selecionados,
  setTermoBusca,
  setUsuarios,
  setSelecionados,
}) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEditar = () => {
    if (selecionados.length === 1) {
      const usuarioParaEditar = usuarios.find((usuario) =>
        selecionados.includes(usuario.id) // Use id como critério
      );
      navigate('/CadastroUsuario', { state: { usuario: usuarioParaEditar } });
    } else if (selecionados.length === 0) {
      alert('Por favor, selecione um usuário para editar.');
    } else {
      alert('Por favor, selecione apenas um usuário para editar.');
    }
  };

  const handleRemover = () => {
    setIsModalOpen(true);
  };

  const handleConfirmRemover = () => {
    const novosUsuarios = usuarios.filter(
      (usuario) => !selecionados.includes(usuario.id) // Use id como critério
    );

    localStorage.setItem('dadosUsuario', JSON.stringify(novosUsuarios));

    setUsuarios(novosUsuarios);
    setSelecionados([]);
    setIsModalOpen(false);
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
        <button onClick={handleEditar}>Editar</button>
        <button onClick={handleRemover}>Remover</button>
      </div>
      <ModalConfirmacao
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmRemover}
      />
    </div>
  );
}