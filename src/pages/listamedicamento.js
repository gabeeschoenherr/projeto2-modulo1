import { useEffect, useState } from "react";
import Nav from "../components/nav";
import Modal from "../components/modal";
function ListaMedicamento(){
    const [listaMedicamento, setListaMedicamento] = useState([]);
    const [enviaListaMedicamento, setEnviaListaMedicamento] = useState();
    const [show, setShow] = useState(false);
    const [busca, setBusca] = useState();
    const [filtro, setFiltro] = useState (listaMedicamento);
  useEffect(() => {
    fetch("http://localhost:3001/medicamentos")
      .then((response) => response.json())
      .then((data) => {
        setListaMedicamento(data);
        setFiltro(data);
      });
  }, []);

  useEffect(()=>{
    setFiltro(
        listaMedicamento.filter(item => {
            if(
                (item.nomeMed.toLocaleLowerCase()).indexOf(busca.toLocaleLowerCase())!== -1){
                    return item
                }
            
        })
    )
  }, [busca])
    return(
        <div>
            <Nav/>
            <div className="contlistamedicamentos">
                <div className="contlistamedicamentosheader">
            <h1>Lista de Medicamentos</h1>
            <input value={busca} onChange={(e) => setBusca(e.target.value)} placeholder="Faça sua Busca"/>
            </div>
                <div className="listamedicamentos">
                    
                
                {filtro.map(listaMedicamento =>(
                    <div>
                        <Modal enviaListaMedicamento={enviaListaMedicamento} onClose={() => setShow(false)} show={show}/>
                <div className='continterno'>
                    
                    <img style={{width:"150px"}} src={process.env.PUBLIC_URL + "img/med.png"}/>
                    <span>
                        <p>{listaMedicamento.nomeMed}</p>
                        <p><button onClick={() => {setEnviaListaMedicamento(listaMedicamento); setShow(true);}}>Mostrar Detalhes</button></p>
                    </span>
                </div>
                </div>
            ))}
                </div>
            </div>
        </div>
    )
}

export default ListaMedicamento;