import style from "./style.module.css";
import { IoMdAddCircle } from "react-icons/io";

export default function TopoCliente() {
  return (
    <div className={style.topoContainer}>
      <h1>Cliente</h1>
      <div className={"d-flex gap-2 "}>
        <button className={style.topoAcoesadd} ><h4 className={style.topoAcoesaddText}><IoMdAddCircle /> NOVO CLIENTE</h4></button>
        <div className='input-group '>
          <input className='form-control ' type="text" placeholder="Pesquisar cliente" />
          <button className='btn btn-success'>Pesquisar</button>
        </div>
        <button className={style.topoAcoesExportar} >EXPORTAR PARA EXCEL</button>
        <div className={style.totalClientes}>
          <span className={style.totalClientesSpan}><h4 className={style.topoAcoesaddText}>TOTAL:</h4></span>
          <input className='form-control-sm' type="text" placeholder="360 cliente(s)" disabled />
        </div>
      </div>
    </div>
    
  );
}
