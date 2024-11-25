import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from 'react-router-dom';
import PaginaInicial from '../pages/PaginaInicial';
import GerenciamentoDeUsuario from '../pages/GerenciamentoDeUsuario';
import Login from '../pages/Login';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function Layout() {
  const location = useLocation();
  const isLogin = location.pathname === '/login';

  return (
    <>
      {!isLogin && <Navbar />}

      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route
          path="/gerenciamentoDeUsuario"
          element={<GerenciamentoDeUsuario />}
        />
        <Route path="/login" element={<Login />} />
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
