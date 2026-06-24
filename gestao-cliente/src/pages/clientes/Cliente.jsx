import { useState } from "react";
import style from "./style.module.css";
import shared from "../../../shared.module.css";
import TopoCliente from "./components/TopClientes/TopoCliente";
import TabelaListaClientes from "./components/TabelaListaClientes/TabelaListaClientes";
import CadCliente from "./components/CardsClientes/CadCliente";


export default function Cliente() {
  
  const [tela, setTela] = useState("lista");

  return (
    <div className={shared.bgPadrao + " " + style.clienteContainer}>
      {/* Passamos a função setTela para dentro do Topo */}
      <TopoCliente
        aoClicarEmNovo={() => setTela("cadastro")}
        aoVoltar={() => setTela("lista")}
        telaAtual={tela}
      />

      {/* Renderização Condicional */}
      {tela === "lista" ? (
        <TabelaListaClientes />
      ) : (
        // Passamos uma função para o cadastro conseguir voltar para a lista depois
        <CadCliente aoVoltar={() => setTela("lista")} />
      )}
    </div>
  );
}
