import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import './Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === 'taylan@gmail.com' && password === 'password') {
      alert('Login bem-sucedido!');
      navigate('/');
    } else {
      alert('Email ou Senha incorretos!');
    }
  };

  return (
    <div className="fundo">
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="input-field">
            <input
              type="email"
              placeholder="e-mail"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <FaUser className="icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              placeholder="senha"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <FaLock className="icon" />
          </div>
          <div className="recall-forget">
            <label>
              <input type="checkbox" />
              Lembre de mim
            </label>
            <a href="#">Esqueceu a senha?</a>
          </div>

          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
