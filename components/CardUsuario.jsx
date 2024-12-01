const CardUsuario = (props) => {
  return (
    <table className="cardUsuario">
    <thead>
      <tr>
        <th></th>
        <th>USUÁRIO</th>
        <th>E-MAIL</th>
        <th>PROFISSÃO</th>
      </tr>
    </thead>
    <tbody>
      {props.itens.map((item, index) => (
        <tr key={index}>
          <td>
            <input type="checkbox" />
          </td>
          <td>{item.nome}</td>
          <td>{item.email}</td>
          <td>{item.profissao}</td>
        </tr>
      ))}
    </tbody>
  </table>
  );
};

export default CardUsuario;
