import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-projeto">Projeto Aplicado</p>
        <div className="footer-contato">
          <p>Contato: (48) 3239-5801</p>
          <p>Email: <a href="mailto:faleconosco@fiesc.com.br" className="footer-link">faleconosco@fiesc.com.br</a></p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
