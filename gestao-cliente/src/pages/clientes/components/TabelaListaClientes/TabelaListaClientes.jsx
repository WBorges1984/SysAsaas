import { useEffect, useState } from "react";
import { editIcon, trashIcon } from "../../../../ImagensIcon/ImagensIcons";
import style from "./style.module.css"; 

const TabelaListaClientes = ({ aoEditar }) => {
  const [clientes, setClientes] = useState([]); 

  useEffect(() => {
    const url = "http://localhost:3001/api/clientes-asaas";

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setClientes(json.data); 
      })
      .catch((err) => console.error("Erro ao buscar dados:", err));
  }, []);

  return (
    <div className={style.tableContainer}>
      <table className={style.customerTable}>
        <thead>
          <tr>
            <th>Nome/Razão Social</th>
            <th>Telefone</th>
            <th>Email</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.name}</td>
              <td>{customer.mobilePhone}</td>
              <td>{customer.email}</td>

              <td>
                <span className={`status-pill ${customer.deleted ? "inativo" : "ativo"}`}>
                  {customer.deleted ? "Inativo" : "Ativo"}
                </span>
              </td>
              <td className={style.actionsCell}>
                
                <button 
                  className={style.highlightedAction} 
                  onClick={() => aoEditar(customer)}
                >
                  <img
                    src={editIcon}
                    alt="Editar"
                    width={25}
                    className={style.actionIcon}
                  />
                </button>
                
                <button className={style.highlightedAction}>
                  <img
                    src={trashIcon}
                    alt="Excluir"
                    width={25}
                    className={style.actionIcon}
                  />
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