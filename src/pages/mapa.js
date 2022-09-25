import Nav from "../components/nav";
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup} from "react-leaflet";
function Mapa() {
  const [farmaciasMapa, setFarmaciasMapa] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3001/farmacias")
      .then((response) => response.json())
      .then((data) => {
        setFarmaciasMapa(data);
      });
  }, []);

  return (
    <div>
      <Nav />
      <div className="contconteudo">
        {/* <h1>Eu sou um mapa2</h1> */}
      </div>
      <MapContainer
        center={[-29.7001256, -52.4429981]}
        zoom={7}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100vw" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {farmaciasMapa.map((farmaciasMapa) => (
          <Marker position={[farmaciasMapa.endereco.geolocalizacao.latitude, farmaciasMapa.endereco.geolocalizacao.longitude]}>
            <Popup>
              <h3>{farmaciasMapa.nomeFantasia}</h3>
              <p>{farmaciasMapa.razaoSocial}</p>
              <p>CNPJ: {farmaciasMapa.cnpj}</p>
              <p>E-mail: {farmaciasMapa.email}</p>
              <p>Telefone: {farmaciasMapa.telefone}</p>
              <p>Celular: {farmaciasMapa.celular}</p>
              <p>Endereço:</p>
              <p>{farmaciasMapa.endereco.logradouro}, {farmaciasMapa.endereco.numero}</p>
              <p>Bairro {farmaciasMapa.endereco.bairro}</p>
              <p>{farmaciasMapa.endereco.cidade} - {farmaciasMapa.endereco.estado}</p>
            </Popup>
          </Marker>
        ))}

      </MapContainer>
    </div>
  );
}

export default Mapa;
