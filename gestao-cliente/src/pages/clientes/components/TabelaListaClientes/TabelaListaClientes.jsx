

import { editIcon, trashIcon } from '../../../../ImagensIcon/ImagensIcons';
import style from './style.module.css'; // Importa o arquivo CSS

const TabelaListaClientes = () => {
  // Dados de exemplo baseados na imagem
  const customers = [
    { id: 1, name: "ACME Corp", phone: "(11) 91234-5678", email: "contato@acmecorp.com.br", status: { text: "Agendado", type: "scheduled" } },
    { id: 2, name: "João Silva Ltda", phone: "(21) 3456-7890", email: "joao@silva.net", status: { text: "Próximos 7 dias", type: "next-7-days" } },
    { id: 3, name: "Tech Solutions", phone: "(31) 2233-4455", email: "tech@solutions.io", status: { text: "Agendado para hoje", type: "today" } },
    { id: 4, name: "Loja do Zé", phone: "(41) 99876-5432", email: "ze.loja@email.com", status: { text: "Atrasado", type: "overdue" } },
    { id: 5, name: "Empresa ABC", phone: "(51) 3322-1100", email: "info@empresaabc.com", status: { text: "Concluído", type: "completed" } },
  ];

  // Componentes de ícone simples usando SVG (para não precisar de bibliotecas externas)



  return (
    <div className={style.tableContainer}>
      <table className={style.customerTable}>
        <thead>
          <tr>
            <th>Nome/Razão Social </th>
            <th>Telefone </th>
            <th>Email </th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
               
              <td>
                <span className={`status-pill ${customer.status.type}`}>
                  {customer.status.text}
                </span>
              </td>
              <td className={style.actionsCell}>
                <button className={index === 0 ? style.highlightedAction : ""}>
                  <img src={editIcon} alt="Editar" width={25} className={style.actionIcon} />
                </button>
                <button className={index === 0 ? style.highlightedAction : ""}>
                  <img src={trashIcon} alt="Excluir"  width={25} className={style.actionIcon} />  
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TabelaListaClientes;