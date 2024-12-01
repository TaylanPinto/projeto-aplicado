import React, { useState } from "react";

const Formulario = ({}) => {
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

  const handleChange = (field, value) => {
    setNovoUsuario((prev) => ({ ...prev, [field]: value }));
  };

  function salvarNoLocalStorage(chave, novoUsuario) {
    let dadosExistentes = localStorage.getItem(chave);

    if (dadosExistentes) {
      // Converte para array se a chave já existir
      dadosExistentes = JSON.parse(dadosExistentes);

      // Certifica-se de que é um array
      if (!Array.isArray(dadosExistentes)) {
        dadosExistentes = [dadosExistentes];
      }

      // Adiciona o novo valor ao array existente
      dadosExistentes.push(novoUsuario);
    } else {
      // Cria um novo array com o novo valor se não existir
      dadosExistentes = [novoUsuario];
    }

    // Salva o array atualizado no localStorage
    localStorage.setItem(chave, JSON.stringify(dadosExistentes));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    salvarNoLocalStorage("dadosUsuario", novoUsuario);
    setNovoUsuario({
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
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <h2>Dados do usuário</h2>
          <div>
            <label>Nome:</label>
            <input
              type="text"
              value={novoUsuario.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
              required
            />
          </div>
          <div>
            <label>E-mail:</label>
            <input
              type="email"
              value={novoUsuario.email}
              onChange={(e) => handleChange("email", e.target.value)}
              required
            />
          </div>
          <div>
            <label>E-mail Secundário:</label>
            <input
              type="email"
              value={novoUsuario.emailSecundario}
              onChange={(e) => handleChange("emailSecundario", e.target.value)}
            />
          </div>
          <div>
            <label>Login: </label>
            <input
              type="text"
              value={novoUsuario.login}
              onChange={(e) => handleChange("login", e.target.value)}
            />
          </div>
          <div>
            <label>CPF: </label>
            <input
              type="text"
              value={novoUsuario.cpf}
              onChange={(e) => handleChange("cpf", e.target.value)}
            />
          </div>
          <div>
            <label>Profissão: </label>
            <input
              type="text"
              value={novoUsuario.profissao}
              onChange={(e) => handleChange("profissao", e.target.value)}
            />
          </div>
          <div>
            <label>Data de Nascimento: </label>
            <input
              type="date"
              value={novoUsuario.dataNasc}
              onChange={(e) => handleChange("dataNasc", e.target.value)}
            />
          </div>
          <div>
            <label>Telefone 1: </label>
            <input
              type="tel"
              value={novoUsuario.telefone1}
              onChange={(e) => handleChange("telefone1", e.target.value)}
            />
          </div>
          <div>
            <label>Telefone 2: </label>
            <input
              type="tel"
              value={novoUsuario.telefone2}
              onChange={(e) => handleChange("telefone2", e.target.value)}
            />
          </div>
          <div>
            <label>Sexo: </label>
            <input
              type="text"
              value={novoUsuario.sexo}
              onChange={(e) => handleChange("sexo", e.target.value)}
            />
          </div>
        </div>
        <div>
          <h2>Endereços do usuário</h2>
          <div>
            <label>Endereço: </label>
            <input
              type="text"
              value={novoUsuario.endereco}
              onChange={(e) => handleChange("endereco", e.target.value)}
              required
            />
          </div>
          <div>
            <label>Número: </label>
            <input
              type="text"
              value={novoUsuario.numero}
              onChange={(e) => handleChange("numero", e.target.value)}
              required
            />
          </div>
          <div>
            <label>Complemento: </label>
            <input
              type="text"
              value={novoUsuario.complemento}
              onChange={(e) => handleChange("complemento", e.target.value)}
              required
            />
          </div>
          <div>
            <label>CEP: </label>
            <input
              type="text"
              value={novoUsuario.cep}
              onChange={(e) => handleChange("cep", e.target.value)}
              required
            />
          </div>
        </div>
        <button type="submit">Salvar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};

export default Formulario;
