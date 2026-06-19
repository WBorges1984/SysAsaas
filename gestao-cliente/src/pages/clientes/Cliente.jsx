import style from "./style.module.css";
import shared from "../../../shared.module.css";
import TopoCliente from "./components/TopClientes/TopoCliente";
import TabelaListaClientes from "./components/TabelaListaClientes/TabelaListaClientes";

export default function Cliente() {
  return (
    <div className={shared.bgPadrao + ' ' + style.clienteContainer}>
      <TopoCliente />
      <TabelaListaClientes />
    </div>
  )
}