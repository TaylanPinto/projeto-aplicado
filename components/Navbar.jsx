import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">Pagina Inicial</Link>
      </li>
      <li>
        <Link to="/gerenciamentoDeUsuario">Gerenciamento de Usuário</Link>
      </li>
      <li>
        <Link to="/login">Sair</Link>
      </li>
    </ul>
  );
}

export default Navbar;
