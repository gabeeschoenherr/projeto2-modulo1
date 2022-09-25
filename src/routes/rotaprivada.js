import {Outlet, Navigate} from "react-router-dom";
import { useLogado } from "../contexts/uselogado";

export const RotaPrivada = () => {
    const {logadoInfo} = useLogado();

    return logadoInfo ? <Outlet/> : <Navigate to="/login" replace />
    
    //return logado === "true" ? <Outlet/> : <Navigate to="/" replace/>
}