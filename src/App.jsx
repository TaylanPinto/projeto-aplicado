import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import PaginaInicial from '../pages/PaginaInicial';
import GerenciamentoDeUsuario from '../pages/GerenciamentoDeUsuario';
import Login from '../pages/Login';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PaginaInicial />} />
        <Route
          path="/gerenciamentoDeUsuario"
          element={<GerenciamentoDeUsuario />}
        />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
