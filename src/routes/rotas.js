import Login from "../pages/login"
import Mapa from "../pages/mapa"
import CadastroFarmacia from "../pages/cadastrofarmacia"
import CadastroMedicamento from "../pages/cadastromedicamento"
import ListaMedicamento from "../pages/listamedicamento"
import NaoEncontrado from "../pages/naoencontrado"
import CadastroLogin from "../pages/cadastrologin"
import { RotaPrivada } from "./rotaprivada"
import { BrowserRouter, Route, Navigate, Routes } from "react-router-dom"

export default function Rotas(){
    return(
        <BrowserRouter>
            <Routes>
                <Route element={<RotaPrivada/>}>
                    
                    <Route path="/mapa" element={<Mapa/>}/>
                    <Route path="/" element={<Navigate replace to="/mapa"/>}/>
                    <Route path="/cadastrodefarmacia" element={<CadastroFarmacia/>}/>
                    <Route path="/cadastromedicamento" element={<CadastroMedicamento/>}/>
                    <Route path="/listamedicamentos" element={<ListaMedicamento/>}/>
                </Route>
                <Route path="*" element={<NaoEncontrado/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/cadastrologin" element={<CadastroLogin/>}/>
            </Routes>
        </BrowserRouter>
    )
}