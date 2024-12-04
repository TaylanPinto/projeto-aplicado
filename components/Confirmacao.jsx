import React from 'react';
import './Confirmacao.css';

const Confirmacao = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="sobreposicao">
      <div className="conteudo">
        <h2>Confirmação</h2>
        <p>Tem certeza de que deseja remover o usuário?</p>
        <div className="botoes">
          <button onClick={onConfirm}>Sim</button>
          <button onClick={onClose}>Não</button>
        </div>
      </div>
    </div>
  );
};

export default Confirmacao;