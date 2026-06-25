import { useState } from "react";
import style from "./style.module.css";
import shared from "../../../shared.module.css";
import TopoCliente from "./components/TopClientes/TopoCliente";
import TabelaListaClientes from "./components/TabelaListaClientes/TabelaListaClientes";
import CadCliente from "./components/CardsClientes/CadCliente";
import EditCliente from "./components/EditCliente/EditCliente";

export default function Cliente() {
  const [tela, setTela] = useState("lista");
  const [clienteSelecionado, setClienteSelecionado] = useState(null);

  const lidarComEdicao = (cliente) => {
    setClienteSelecionado(cliente);
    setTela("editar"); 
  };

  return (
    <div className={shared.bgPadrao + " " + style.clienteContainer}>
      <TopoCliente
        aoClicarEmNovo={() => setTela("cadastro")}
        aoVoltar={() => setTela("lista")}
        telaAtual={tela}
      />
      
      {tela === "lista" && (
        <TabelaListaClientes aoEditar={lidarComEdicao} />
      )}

      {tela === "cadastro" && (
        <CadCliente aoVoltar={() => setTela("lista")} />
      )}

      {tela === "editar" && (
        <EditCliente
          key={clienteSelecionado?.id} 
          cliente={clienteSelecionado}
          aoVoltar={() => setTela("lista")}
        />
      )}
    </div>
  );
}