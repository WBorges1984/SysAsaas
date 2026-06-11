import { Outlet } from "react-router-dom";
import { ItemMenu } from "../../components/itemMenu/ItemMenu";
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
            <ItemMenu titulo={"Visão Geral"} icon={<span>📊</span>} pagina="/dashboard" />
            <ItemMenu titulo={"Clientes"} icon={<span>👥</span>} pagina="/cliente" />
            <ItemMenu titulo={"Receita"} icon={<span>💰</span>} pagina="/receita" />
            <ItemMenu titulo={"Despesa"} icon={<span>💸</span>} pagina="/despesa" />
            <ItemMenu titulo={"Financeiro"} icon={<span>📈</span>} pagina="/financeiro" />
            <ItemMenu titulo={"Relatórios"} icon={<span>📋</span>} pagina="/relatorios" />
            <ItemMenu titulo={"Ajustes"} icon={<span>⚙️</span>} pagina="/ajustes" />
            <ItemMenu titulo={"Sair"} icon={<span>🚪</span>} pagina="/" />
          </ul>
        </div>
      </div>
      <div className={style.containerContent}>
        <Outlet />
      </div>
    </div>
  );
}
