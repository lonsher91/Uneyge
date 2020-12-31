import React from "react";
import "../../App.css";
import Founder1 from "../../images/img-1.jpg";
import Founder2 from "../../images/img-2.jpg";
import Founder3 from "../../images/img-4.jpg";
import MapView from "../MapView";

export default function Us() {
  return (
    <>
      <h1 className="marketing">SOBRE NOSOTROS</h1>
      <div className="description">
        <p>
          Básicamente somos 3 pelotuditos que quieren ser como Bill Gates o
          Steve Jobs... Nobleza obliga, tenemos los mejores precios de Mendoza.
        </p>
      </div>
      <div className="about-us">
        <div className="founder">
          <img
            className="img-founder"
            src={Founder1}
            alt="imagen de contacto"
          />
          <h1>Diego Posleman</h1>
          <p>
            Especializado en estupefacientes asdasd asdasdasd asdasdasd asdasdas
          </p>
        </div>
        <div className="founder">
          <img
            className="img-founder"
            src={Founder2}
            alt="imagen de contacto"
          />
          <h1>Maximiliano Salinas</h1>
          <p>
            Especializado en tráfico de órganos asdasd asdasdasd asdasdasd asd
          </p>
        </div>
        <div className="founder">
          <img
            className="img-founder"
            src={Founder3}
            alt="imagen de contacto"
          />
          <h1>Pablo Nuñez</h1>
          <p>
            Especializado en la concha de tu hermana asdddddddddddddddddd d asd
            dsadsadsads
          </p>
        </div>
      </div>
      <div>
        <MapView />
      </div>
    </>
  );
}
