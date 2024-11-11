import React from 'react';
import { FaUser, FaLock } from 'react-icons/fa';

const Login = () => {
  return (
    <div className="container">
      <form>
        <h1>Acesse o sistema</h1>
        <div>
          <input type="email" placeholder="e-mail" />
          <FaUser className="icon" />
        </div>
        <div>
          <input type="password" placeholder="senha" />
          <FaLock className="icon" />
        </div>
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
