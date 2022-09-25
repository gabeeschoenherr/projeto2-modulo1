import { useNavigate } from "react-router-dom";
function NaoEncontrado(){
    const navigate = useNavigate();
    const voltar = (e) => {
        e.preventDefault();
        navigate("/mapa");

    }
    return(
        <div className="contnaoencontrado">
            <img src={process.env.PUBLIC_URL + "img/ilust3.png"}/>
            <p><button onClick={voltar}>Voltar</button></p>
        </div>
    )
}

export default NaoEncontrado;