
import { Route, BrowserRouter, Routes as RouterRoutes } from "react-router-dom";
import { Login } from "./src/pages/login/Login";
import { Cadastrese } from "./src/pages/login/cadastrese/Cadastrese";
import { ForgotPassword } from "./src/pages/login/esqueci_senha/ForgotPassword";
import Dashboard from "./src/pages/dashboard/Dashboard";




const AppRoutes = () => {

   return(
       <BrowserRouter>
           <RouterRoutes>
               <Route path="/" element={<Login />} />
               <Route path="/cadastrese" element={<Cadastrese />} />
               <Route path="/forgot-password" element={<ForgotPassword />} />
               <Route path="/dashboard" element={<Dashboard />} />
           </RouterRoutes>
       </BrowserRouter>
   )
}

export default AppRoutes;