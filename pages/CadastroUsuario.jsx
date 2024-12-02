import React from 'react'
import Formulario from '../components/Formulario'
import { useLocation } from 'react-router-dom';

export default function CadastroUsuario() {
  const location = useLocation();
  const usuario = location.state?.usuario;

  return (
    <div>
    <Formulario usuario={usuario}/>
    </div>
  )
}
