import style from "./style.module.css";
import shared from "../../../shared.module.css";

export default function Financeiro() {
  return (
    <div className={style.financeiro + ' ' + shared.bgPadrao}>
      <h1>Financeiro</h1>
    </div>
  )
}