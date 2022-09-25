import { useNavigate } from "react-router-dom";
import { useLogado } from "../contexts/uselogado";
import Nav from "../components/nav";
import { useState, useEffect } from "react";
function Login() {
  const [statusLogin, setStatusLogin] = useState("Digite suas informações!");

  const [statusLoginCor, setStatusLoginCor] = useState({
    color: "#49332d",
  });

  const [loginCorreto, setLoginCorreto] = useState(false);

  const [senhaDigitada, setSenhaDigitada] = useState({
    email: "",
    senha: "",
  });

  const [loginDb, setLoginDb] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/login")
      .then((response) => response.json())
      .then((data) => {
        setLoginDb(data);
      });
  }, []);

  useEffect(() => {
    loginDb.filter((item) => {
      if (
        item.login == senhaDigitada.email &&
        item.senha == senhaDigitada.senha
      ) {
        setLoginCorreto(true);
      }
    });
  }, [senhaDigitada.senha]);

  const valida = new RegExp("^(?=.*([A-Za-z]{1,}))(?=.*[0-9]{1,}).{8,100}$");

  const { setLogadoInfo } = useLogado();

  const navigate = useNavigate();

  function fazLogin(event) {
    event.preventDefault();


    if (senhaDigitada.email === "") {
      setStatusLogin("Digite um e-mail!");
      setStatusLoginCor({ color: "red" });
    } else if (senhaDigitada.senha === "") {
      setStatusLogin("Digite uma senha!");
      setStatusLoginCor({ color: "red" });
    } else if (!valida.test(senhaDigitada.senha)) {
      setStatusLogin(
        "Digite uma senha com números,letras e no mínimo 8 caracteres!"
      );
      setStatusLoginCor({ color: "red" });
    } else if (loginCorreto == false) {
      setStatusLogin("Digite uma senha e/ou e-mail válidos!");
      setStatusLoginCor({ color: "red" });
    } else {

      setLogadoInfo(true);
      navigate("/mapa");
    }
  }

  return (
    <>
      <div>
        <Nav />
      </div>
      <div className="loginmain">
        <div className="loginmaininputs">
          <h1>Login</h1>
          <span style={statusLoginCor}>{statusLogin}</span>
          <form onSubmit={fazLogin}>
            <p>
              <label>E-mail</label>
            </p>
            <p>
              <input
                type="email"
                name="email"
                required
                placeholder="Digite um e-mail"
                id="email"
                value={senhaDigitada.email}
                onChange={(e) => {
                  setSenhaDigitada({ ...senhaDigitada, email: e.target.value });
                }}
              />
            </p>
            <p>
              <label>Senha</label>
            </p>
            <p>
              <input
                type="password"
                name="senha"
                required
                placeholder="Digite sua senha"
                id="senha"
                value={senhaDigitada.senha}
                onChange={(e) => {
                  setSenhaDigitada({ ...senhaDigitada, senha: e.target.value });
                }}
              />
            </p>
            <p>
              <button type="submit">Acessar</button>
            </p>
          </form>
        </div>
        <img
          className="loginmainilust"
          src={process.env.PUBLIC_URL + "img/ilust1.png"}
        />
      </div>
    </>
  );
}

export default Login;
