function Modal(props){
    if (!props.show){
        return null
    }

    return(
        <div className="modal" onClick={props.onClose}>
            <div className="modalconteudo" onClick={e=>e.stopPropagation()}>
                <h1>{props.enviaListaMedicamento.nomeMed}</h1>
                <div className="modalinfo">
                    <div className="modalinfoesquerda">
                        <p><span className="modalnegrito">Laboratório:</span> {props.enviaListaMedicamento.nomeLab}</p>
                        <p><span className="modalnegrito">Dosagem:</span> {props.enviaListaMedicamento.dosagem}</p>
                    </div>
                    
                    <div className="modalinfodireita">
                        <p><span className="modalnegrito">Tipo: </span>{props.enviaListaMedicamento.tipoMed}</p>
                        <p><span className="modalnegrito">Preço: </span> R$ {props.enviaListaMedicamento.preco}</p>
                    </div>
                    </div>
                <div className="modaldescri">
                    {props.enviaListaMedicamento.descriMed}
                </div>
                <button onClick={props.onClose}>Fechar</button>
            </div>

        </div>
    );

}

export default Modal;