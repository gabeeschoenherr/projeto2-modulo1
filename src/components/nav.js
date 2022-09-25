import { NavLink } from "react-router-dom";
import { useLogado } from "../contexts/uselogado";
import NavDeslogado from "./navdeslogado";
import NavLogado from "./navlogado";
function Nav(){

    const {logadoInfo} = useLogado();

    return(
        <nav className="menu">
            <NavLink to="/">
                <img className="menulogo" src={process.env.PUBLIC_URL + "img/logo.png"}/>
            </NavLink>
            <div className="menudireita">
                {logadoInfo ? <NavLogado/> : <NavDeslogado/>}
            </div>
        </nav>
    )
}

export default Nav;