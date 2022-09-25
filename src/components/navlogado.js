import { NavLink } from "react-router-dom";
import { useLogado } from "../contexts/uselogado";
function NavLogado(){
    function deslogar(){
        setLogadoInfo(false);
    }

    const {setLogadoInfo} = useLogado();

    return(    
        <div className="navlogadospan">
            <NavLink to="/mapa"  className={({ isActive }) => (isActive ? 'navbotaoselecionado' : 'inactive')}><button>Mapa</button></NavLink>
            <NavLink to="/listamedicamentos" className={({ isActive }) => (isActive ? 'navbotaoselecionado' : 'inactive')}><button>Medicamentos</button></NavLink>
            <NavLink to="/cadastrodefarmacia" className={({ isActive }) => (isActive ? 'navbotaoselecionado' : 'inactive')}><button>Cadastro de Farmácia</button></NavLink>
            <NavLink to="/cadastromedicamento" className={({ isActive }) => (isActive ? 'navbotaoselecionado' : 'inactive')}><button>Cadastro de Medicamentos</button></NavLink>
            <button className="navbotaosair" onClick={deslogar}>Sair</button>
        </div>
    )
}

export default NavLogado;