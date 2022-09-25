import Nav from "../components/nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CadastroLogin() {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    nome: "",
    login: "",
    senha: "",
  });

  const [statusLogin, setStatusLogin] = useState("Digite suas informações!");

  const [statusLoginCor, setStatusLoginCor] = useState({
    color: "#49332d",
  });

  const valida = new RegExp("^(?=.*([A-Za-z]{1,}))(?=.*[0-9]{1,}).{8,100}$");

  const cadastraLogin = (e) => {
    console.log({login})
    e.preventDefault();
    if (!valida.test(login.senha)) {
      setStatusLogin(
        "Digite uma senha com letras, números e no mínimo 8 caracteres!"
      );
      setStatusLoginCor({ color: "red" });
    } else {
      fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(login),
      });
      alert("Login cadastrado!");
      navigate("/login");
    }
  };

  const alteraCampoLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Nav />
      <div className="contcadastrologin">
        <div className="cadastrologinesquerda">
          <h1>Cadastro de Login</h1>
          <p style={statusLoginCor}>{statusLogin}</p>
          <form onSubmit={cadastraLogin}>
            <label>Nome do usuário:</label>
            <p>
              <input
                name="nome"
                onChange={(e) => alteraCampoLogin(e)}
                required
              />
            </p>
            <label>E-mail:</label>
            <p>
              <input
                type="email"
                name="login"
                onChange={(e) => alteraCampoLogin(e)}
                required
              />
            </p>
            <label>Senha:</label>
            <p>
              <input
                name="senha"
                type="password"
                onChange={(e) => alteraCampoLogin(e)}
                required
              />
            </p>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
        <img
          className="loginmainilust"
          src={process.env.PUBLIC_URL + "img/ilust7.png"}
        />
      </div>
    </div>
  );
}

export default CadastroLogin;
