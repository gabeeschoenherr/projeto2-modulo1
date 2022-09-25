import { NavLink } from "react-router-dom";
function NavDeslogado(){

    return( 
        <div>   
        <NavLink to="/login" className={({ isActive }) => (isActive ? 'navbotaoselecionado' : 'inactive')}><button>Login</button></NavLink>
        <NavLink to="/cadastrologin" className={({ isActive }) => (isActive ? 'navbotaoselecionado' : 'inactive')}><button>Cadastro</button></NavLink>
        </div>
    )
}

export default NavDeslogado;