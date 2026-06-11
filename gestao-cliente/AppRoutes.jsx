import { Route, BrowserRouter, Routes as RouterRoutes } from "react-router-dom";
import { Login } from "./src/pages/login/Login";
import { Cadastrese } from "./src/pages/login/cadastrese/Cadastrese";
import { ForgotPassword } from "./src/pages/login/esqueci_senha/ForgotPassword";
import Dashboard from "./src/pages/dashboard/Dashboard";
import Cliente from "./src/pages/clientes/Cliente";
import Receita from "./src/pages/receita/Receita";
import Despesa from "./src/pages/despesa/Despesa";
import Financeiro from "./src/pages/financeiro/Financeiro";
import Relatorios from "./src/pages/relatorios/Relatorios";
import Ajustes from "./src/pages/ajustes/Ajustes";

const AppRoutes = () => {
   return(
       <BrowserRouter>
           <RouterRoutes>
               <Route path="/" element={<Login />} />
               <Route path="/cadastrese" element={<Cadastrese />} />
               <Route path="/forgot-password" element={<ForgotPassword />} />

               <Route element={<Dashboard />}>
                   <Route path="/cliente" element={<Cliente />} />
                   <Route path="/receita" element={<Receita />} />
                   <Route path="/despesa" element={<Despesa />} />
                   <Route path="/financeiro" element={<Financeiro />} />
                   <Route path="/relatorios" element={<Relatorios />} />
                   <Route path="/ajustes" element={<Ajustes />} />
                   
                   <Route path="/dashboard" element={<h2>Componente da Visão Geral vai aqui!</h2>} />
               </Route>

           </RouterRoutes>
       </BrowserRouter>
   )
}

export default AppRoutes;