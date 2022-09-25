import { useEffect, useState } from "react";
import Nav from "../components/nav";
import { useNavigate } from "react-router-dom";

function CadastroFarmacia() {
  const [farmaciaCadastro, setFarmaciaCadastro] = useState({
    razaoSocial:"",
    cnpj:"",
    nomeFantasia:"",
    email:"",
    telefone:"",
    celular:"",
    endereco:
        {
            cep:"",
            logradouro:"",
            numero:"",
            bairro:"",
            cidade:"",
            estado:"",
            complemento:"",
            geolocalizacao:
                {
                    latitude:"",
                    longitude:""
                }
            
        }
  })
  const navigate = useNavigate();

  const[mensagemCadastroCep, setMensagemCadastroCep] = useState(false);
  const[mensagemCadastroGeo, setMensagemCadastroGeo] = useState(false);

  const cadastraFarmacia = (e) => {
    e.preventDefault();
    console.log(farmaciaCadastro);
    fetch("http://localhost:3001/farmacias", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(farmaciaCadastro),
    })
    alert("Farmácia Cadastrada!")
    navigate("/mapa")
  };

  const alteraCampoFarmacia = (e) => {
    setFarmaciaCadastro({...farmaciaCadastro, [e.target.name]: e.target.value})

  };

  const alteraCampoEndereco = (e) => {
    setFarmaciaCadastro({...farmaciaCadastro, endereco:{...farmaciaCadastro.endereco, [e.target.name]: e.target.value}})
  
  };

  const alteraCampoGeolocalizacao = (e) => {
    setFarmaciaCadastro({...farmaciaCadastro, endereco:{...farmaciaCadastro.endereco, geolocalizacao:{...farmaciaCadastro.endereco.geolocalizacao,[e.target.name]: e.target.value}}})
  
  };

  
  useEffect(() => {
    if (farmaciaCadastro.endereco.cep.length == 8) {
    let cepB = fetch("https://viacep.com.br/ws/" + farmaciaCadastro.endereco.cep + "/json/")
    .then((response) => {
      return response.json();
    })
    .then((cep) => {
      farmaciaCadastro.endereco.logradouro = cep.logradouro;
      farmaciaCadastro.endereco.bairro = cep.bairro;
      farmaciaCadastro.endereco.cidade = cep.localidade;
      farmaciaCadastro.endereco.estado = cep.uf;
      console.log(cep)
      setMensagemCadastroCep(true)

    });
  } 
  },[farmaciaCadastro.endereco.cep])

  const gerarGeo = (e) => {
    e.preventDefault();
    e.preventDefault()
    if(farmaciaCadastro.endereco.logradouro != ""){
      let geoB = fetch(`https://nominatim.openstreetmap.org/search?q=${farmaciaCadastro.endereco.logradouro}+${farmaciaCadastro.endereco.cidade}&format=json`)
      .then((response) => {
        return response.json();
      })
      .then((geo) => {
        farmaciaCadastro.endereco.geolocalizacao.latitude = geo[0].lat;
        farmaciaCadastro.endereco.geolocalizacao.longitude = geo[0].lon;
        console.log(geo)
        setMensagemCadastroGeo(true)
  
      });
    }
  }

  return (
    <div>
      <Nav />
      <div className="contcadastrofarmacia">
      <img
          className="cadastrofarmmainilust"
          src={process.env.PUBLIC_URL + "img/ilust2-1.png"}
        />
        <div className="cadastrofarmesquerda">
        
          <h1>Cadastro de Farmácia</h1>
          <p>Cadastre aqui as informações da sua farmácia.</p>
          <form onSubmit={cadastraFarmacia}>
            <label>Razão Social:</label>
            <p>
              <input
                name="razaoSocial"
                onChange={(e) => alteraCampoFarmacia(e)} required/>
            </p>

            <label>CNPJ:</label>
            <p>
              <input name="cnpj" onChange={(e) => alteraCampoFarmacia(e)} required/>
            </p>

            <label>Nome Fantasia:</label>
            <p>
              <input
                name="nomeFantasia" onChange={(e) => alteraCampoFarmacia(e)} required/>
            </p>

            <label>E-mail:</label>
            <p>
              <input name="email" onChange={(e) => alteraCampoFarmacia(e)} required/>
            </p>

            <label>Telefone</label>
            <p>
              <input name="telefone" onChange={(e) => alteraCampoFarmacia(e)} />
            </p>

            <label>Celular:</label>
            <p>
              <input name="celular" onChange={(e) => alteraCampoFarmacia(e)} required/>
            </p>

            <h1>Endereço</h1>
            <p>Informe o CEP e depois adicione o número e complemento.</p>
            <p>{mensagemCadastroCep}</p>
            <label>CEP:</label>
            <p>
              <input
                name="cep"
                onChange={(e) => alteraCampoEndereco(e)}
                value={farmaciaCadastro.endereco.cep} required/>
            </p>

            <label>Logradouro:</label>
            <p>
              <input name="logradouro"
              onChange={(e) => alteraCampoEndereco(e)}
              value={farmaciaCadastro.endereco.logradouro} required/>
            </p>

            <label>Número:</label>
            <p>
              <input name="numero" 
              onChange={(e) => alteraCampoEndereco(e)}
              value={farmaciaCadastro.endereco.numero} required/>
            </p>

            <label>Bairro:</label>
            <p>
              <input name="bairro" 
              onChange={(e) => alteraCampoEndereco(e)}
               value={farmaciaCadastro.endereco.bairro} required/>
            </p>

            <label>Cidade:</label>
            <p>
              <input name="cidade"
              onChange={(e) => alteraCampoEndereco(e)}
              value={farmaciaCadastro.endereco.cidade} required/>
            </p>

            <label>Estado:</label>
            <p>
              <input name="estado" 
              onChange={(e) => alteraCampoEndereco(e)}
              value={farmaciaCadastro.endereco.estado} required/>
            </p>

            <label>Complemento:</label>
            <p>
              <input name="complemento" 
              onChange={(e) => alteraCampoEndereco(e)}/>
            </p>
            
            <h1>Geolocalização</h1>
            <label>Latitude:</label>
            <p>
              <input name="latitude" 
              onChange={(e) => alteraCampoGeolocalizacao(e)}
              value={farmaciaCadastro.endereco.geolocalizacao.latitude} disabled required/>
            </p>

            <label>Longitude:</label>
            <p>
              <input name="longitude"
              onChange={(e) => alteraCampoGeolocalizacao(e)}
              value={farmaciaCadastro.endereco.geolocalizacao.longitude} disabled required/>
            </p>

            <button onClick={gerarGeo}>Gerar Geolocalização</button>
            <button type="submit">Cadastrar Farmácia</button>
          </form>
        </div>
  
      </div>
    </div>
  );
}

export default CadastroFarmacia;
