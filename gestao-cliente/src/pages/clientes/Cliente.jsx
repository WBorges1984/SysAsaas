import style from "./style.module.css";
import shared from "../../../shared.module.css";

export default function Cliente() {
  return (
    <div className={shared.bgPadrao + ' ' + style.clienteContainer}>
      <h1>Cliente</h1>
    </div>
  )
}