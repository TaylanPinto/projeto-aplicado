import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importa o hook para redirecionamento
import "./Formulario.css";

const Formulario = () => {
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

  const navigate = useNavigate(); // Hook para redirecionar o usuário

  const handleChange = (field, value) => {
    setNovoUsuario((prev) => ({ ...prev, [field]: value }));
  };

  const salvarNoLocalStorage = (chave, novoUsuario) => {
    let dadosExistentes = localStorage.getItem(chave);
    if (dadosExistentes) {
      dadosExistentes = JSON.parse(dadosExistentes);
      if (!Array.isArray(dadosExistentes)) {
        dadosExistentes = [dadosExistentes];
      }
      dadosExistentes.push(novoUsuario);
    } else {
      dadosExistentes = [novoUsuario];
    }
    localStorage.setItem(chave, JSON.stringify(dadosExistentes));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    salvarNoLocalStorage("dadosUsuario", novoUsuario);
    navigate("/gerenciamentoDeUsuario"); // Redireciona para Gerenciamento de Usuários
  };

  const handleCancelar = () => {
    navigate("/gerenciamentoDeUsuario"); // Redireciona ao clicar em Cancelar
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
          <label>E-mail Secundário</label>
          <input
            type="email"
            value={novoUsuario.emailSecundario}
            onChange={(e) => handleChange("emailSecundario", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Login</label>
          <input
            type="text"
            value={novoUsuario.login}
            onChange={(e) => handleChange("login", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>CPF</label>
          <input
            type="text"
            value={novoUsuario.cpf}
            onChange={(e) => handleChange("cpf", e.target.value)}
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
          <label>Telefone 1</label>
          <input
            type="tel"
            value={novoUsuario.telefone1}
            onChange={(e) => handleChange("telefone1", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Telefone 2</label>
          <input
            type="tel"
            value={novoUsuario.telefone2}
            onChange={(e) => handleChange("telefone2", e.target.value)}
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
        <h2>Endereços do Usuário</h2>
        <div className="form-group">
          <label>Endereço</label>
          <input
            type="text"
            value={novoUsuario.endereco}
            onChange={(e) => handleChange("endereco", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Número</label>
          <input
            type="text"
            value={novoUsuario.numero}
            onChange={(e) => handleChange("numero", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Complemento</label>
          <input
            type="text"
            value={novoUsuario.complemento}
            onChange={(e) => handleChange("complemento", e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>CEP</label>
          <input
            type="text"
            value={novoUsuario.cep}
            onChange={(e) => handleChange("cep", e.target.value)}
          />
        </div>
        <div className="button-group">
          <button type="submit" className="btn salvar">Salvar</button>
          <button type="button" className="btn cancelar" onClick={handleCancelar}>Cancelar</button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
