import Nav from "../components/nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CadastroMedicamento() {
  const [medicaCadastro, setMedicaCadastro] = useState({
    nomeMed: "",
    nomeLab: "",
    dosagem: "",
    descriMed: "",
    preco: "",
    tipoMed: "",
  });

  const navigate = useNavigate();

  const cadastraMedicamento = (e) => {
    e.preventDefault();
    console.log(medicaCadastro);
    fetch("http://localhost:3001/medicamentos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(medicaCadastro),
    });
    alert("Medicamento Cadastrado")
    navigate("/listamedicamentos");
  };

  const alteraCampoMedicamento = (e) => {
    setMedicaCadastro({ ...medicaCadastro, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Nav />
      <div className="contcadastromedicamento">
      <img
          className="cadastrofarmmainilust"
          src={process.env.PUBLIC_URL + "img/ilust6.png"}
        />
        <div className="cadastromedesquerda">
          <h1>Cadastro de Medicamentos</h1>
          <p>Cadastre aqui as informações do seu medicamento.</p>
          <form onSubmit={cadastraMedicamento}>
            <label>Nome do medicamento:</label>
            <p>
              <input
                name="nomeMed"
                onChange={(e) => alteraCampoMedicamento(e)}
                required
              />
            </p>
            <label>Nome do laboratório:</label>
            <p>
              <input
                name="nomeLab"
                onChange={(e) => alteraCampoMedicamento(e)}
                required
              />
            </p>
            <label>Dosagem:</label>
            <p>
              <input
                name="dosagem"
                onChange={(e) => alteraCampoMedicamento(e)}
                required
              />
            </p>
            <label>Descrição:</label>
            <p>
              <textarea
                name="descriMed"
                onChange={(e) => alteraCampoMedicamento(e)}
                required
              />
            </p>
            <label>Preço:</label>
            <p>
              <input
                name="preco"
                onChange={(e) => alteraCampoMedicamento(e)}
                required
              />
            </p>
            <label>Tipo de medicamento:</label>
            <p>
              <select
                name="tipoMed"
                onChange={(e) => alteraCampoMedicamento(e)}
                required
              >
                <option value=""></option>
                <option value="controlado">Controlado</option>
                <option value="comum">Comum</option>
              </select>
            </p>
            <button type="submit">Cadastrar Medicamento</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CadastroMedicamento;
