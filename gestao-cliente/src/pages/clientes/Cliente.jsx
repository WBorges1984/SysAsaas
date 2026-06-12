import style from "./style.module.css";
import shared from "../../../shared.module.css";
import TopoCliente from "./components/TopoCliente";

export default function Cliente() {
  return (
    <div className={shared.bgPadrao + ' ' + style.clienteContainer}>
      <TopoCliente />
    </div>
  )
}