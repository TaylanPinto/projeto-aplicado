import CardUsuario from '../components/CardUsuario'
import { useEffect, useState } from 'react';
import React from 'react'
import BarraLateralGer from '../components/BarraLateralGer';

export default function GerenciamentoDeUsuario() {
  const [usuarios, setUsuarios] = useState([]);
  
  useEffect(() => {
    let dadosExistentes = localStorage.getItem("dadosUsuario");
    console.log(dadosExistentes);
    if (dadosExistentes) {
      dadosExistentes = JSON.parse(dadosExistentes);
      setUsuarios(dadosExistentes);
    }
  }, []);



  return (
    <>
    <div className="cardsUsuarios">
        {usuarios.length > 0 ? (<CardUsuario itens={usuarios} />) :
          (<p>Nenhum usuário encontrado.</p>)}
      </div>
      <div className="BarraLateral">
        <BarraLateralGer />
      </div></>
  )
}