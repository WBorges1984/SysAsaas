import style from "./style.module.css";
import shared from "../../../shared.module.css";
export default function Receita() {
  return (
    <div className={style.receita + ' ' + shared.bgPadrao}>
      <h1>Receita</h1>
    </div>
  )
}