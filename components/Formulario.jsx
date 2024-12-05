import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import "./Formulario.css";

const Formulario = ({ usuario, onSubmit }) => {
  const [novoUsuario, setNovoUsuario] = useState({
    nome: "",
    email: "",
    emailSecundario: "",
    login: "",
    cpf: "",
    profissao: "",
    dataNasc: "",
    telefone1: "",
    telefone2: "",
    sexo: "",
    endereco: "",
    numero: "",
    complemento: "",
    cep: "",
  });
  const [edicao, setEdicao] = useState(false);

  useEffect(() => {
    if (usuario) {
      setEdicao(true);
      setNovoUsuario(usuario); 
    }
  }, [usuario]);
  

  const navigate = useNavigate();

  const handleChange = (field, value) => {
    setNovoUsuario((prev) => ({ ...prev, [field]: value }));
  };

  const salvarNoLocalStorage = (chave, novoUsuario, edicao) => {
    let dadosExistentes = JSON.parse(localStorage.getItem(chave)) || [];
  
    if (edicao) {
      dadosExistentes = dadosExistentes.map((usuario) =>
        usuario.id === novoUsuario.id ? novoUsuario : usuario
      );
    } else {
      novoUsuario.id = Date.now();  
      dadosExistentes.push(novoUsuario);
    }
  
    localStorage.setItem(chave, JSON.stringify(dadosExistentes));
  };
  
  
  

  const handleSubmit = (e) => {
    e.preventDefault();
    salvarNoLocalStorage("dadosUsuario", novoUsuario, edicao);
    navigate("/gerenciamentoDeUsuario");
  };
  

  const handleCancelar = () => {
    navigate("/gerenciamentoDeUsuario");
  };

  return (
    <div className="formulario-container">
      <form onSubmit={handleSubmit} className="formulario">
        <h2>Dados do Usuário</h2>
        <div className="form-group">
          <label>Nome</label>
          <input
            type="text"
            value={novoUsuario.nome}
            onChange={(e) => handleChange("nome", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>E-mail</label>
          <input
            type="email"
            value={novoUsuario.email}
            onChange={(e) => handleChange("email", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>CPF</label>
          <input
            type="text"
            value={novoUsuario.cpf}
            onChange={(e) => handleChange("cpf", e.target.value)}
            readOnly={edicao}
          />
        </div>
        <div className="form-group">
          <label>Profissão</label>
          <input
            type="text"
            value={novoUsuario.profissao}
            onChange={(e) => handleChange("profissao", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Data de Nascimento</label>
          <input
            type="date"
            value={novoUsuario.dataNasc}
            onChange={(e) => handleChange("dataNasc", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Sexo</label>
          <select
            value={novoUsuario.sexo}
            onChange={(e) => handleChange("sexo", e.target.value)}
          >
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
            <option value="Outro">Outro</option>
          </select>
        </div>
        <div className="button-group">
          <button type="submit" className="btn salvar">
            Salvar
          </button>
          <button
            type="button"
            className="btn cancelar"
            onClick={handleCancelar}
          >
            Cancelar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
