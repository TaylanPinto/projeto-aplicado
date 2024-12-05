import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import Login from '../pages/Login';
import PaginaInicial from '../pages/PaginaInicial';
import GerenciamentoDeUsuario from '../pages/GerenciamentoDeUsuario';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CadastroUsuario from '../pages/CadastroUsuario';
import About from '../pages/About.jsx'; // Importe o componente About
import '../pages/About.jsx'
import '../pages/GerenciamentoDeUsuario.css';
import '../src/App.css';

function Layout() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <>
      {!isLogin && <Navbar />}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<PaginaInicial />} />
        <Route
          path="/gerenciamentoDeUsuario"
          element={<GerenciamentoDeUsuario />}
        />
        <Route path="/CadastroUsuario" element={<CadastroUsuario />} />
        <Route path="/about" element={<About />} />
      </Routes>
      {!isLogin && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;