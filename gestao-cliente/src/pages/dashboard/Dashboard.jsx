import Logo from "../../components/logo/Logo";
import style from "./style.module.css";

export default function Dashboard() {
  return (
    <div className={style.container}>
      <div className={style.sidebar}>
        <div className={style.logo}>
          <Logo texto={"Borges Açaí"} />
        </div>
        <div className={style.menu}>
          <ul>
            <li>Visão Geral</li>
            <li>Clientes</li>
            <li>Receita</li>
            <li>Despesa</li>
            <li>Financeiro</li>
            <li>Relatórios</li>
            <li>Ajustes</li>
          </ul>
        </div>
      </div>
      <div className={style.containerContent}>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
}
