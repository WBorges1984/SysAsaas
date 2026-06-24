import style from "./style.module.css";
import { IoMdAddCircle, IoMdArrowBack } from "react-icons/io"; // Importei um ícone de voltar também

export default function TopoCliente({ aoClicarEmNovo, aoVoltar, telaAtual }) {
  return (
    <div className={style.topoContainer}>
      {/* Altera o título dinamicamente com base na tela */}
      <h1>{telaAtual === "lista" ? "Cliente" : "Cadastro de Cliente"}</h1>
      
      <div className={"d-flex gap-2 "}>
        {telaAtual === "lista" ? (
          /* --- SE ESTIVER NA LISTA: Mostra todos os controles normais --- */
          <>
            {/* Adicionado o onClick aqui */}
            <button className={style.topoAcoesadd} onClick={aoClicarEmNovo}>
              <h4 className={style.topoAcoesaddText}>
                <IoMdAddCircle /> NOVO CLIENTE
              </h4>
            </button>

            <div className='input-group '>
              <input className='form-control ' type="text" placeholder="Pesquisar cliente" />
              <button className='btn btn-success'>Pesquisar</button>
            </div>

            <button className={style.topoAcoesExportar}>EXPORTAR PARA EXCEL</button>

            <div className={style.totalClientes}>
              <span className={style.totalClientesSpan}>
                <h4 className={style.topoAcoesaddText}>TOTAL:</h4>
              </span>
              <input className='form-control-sm' type="text" placeholder="360 cliente(s)" disabled />
            </div>
          </>
        ) : (
          /* --- SE ESTIVER NO CADASTRO: Mostra apenas o botão de voltar --- */
          <button className="btn btn-secondary d-flex align-items-center gap-2" onClick={aoVoltar}>
            <IoMdArrowBack /> Voltar para a Lista
          </button>
        )}
      </div>
    </div>
  );
}