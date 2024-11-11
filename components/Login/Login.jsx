import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <form>
        <h1>Acesse o sistema</h1>
        <input type="email" placeholder="e-mail" />
        <input type="password" placeholder="senha" />
        <button>Entrar</button>
      </form>
    </div>
  );
};

export default Login;
