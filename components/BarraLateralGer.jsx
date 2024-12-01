import React from 'react'
import { Link } from 'react-router-dom'

export default function BarraLateralGer() {
  return (
    <div>
        <input type="text"/>
        <div/>
        <div>
        <button><Link to="/CadastroUsuario">Cadastrar</Link></button>
        <button><Link to="/CadastroUsuario">Editar</Link></button>
        <button>Remover</button>
        </div>
    </div>
  )
}
