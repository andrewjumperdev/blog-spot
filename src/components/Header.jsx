import React from "react";
import ThemeSwitcher from "./ToggleButton";

const Header = ({ width, logo }) => {
  return (
    <>
      <div className="container">
        <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">Descubre un Mundo de Posibilidades: Desarrollo Web, Viajes y Ejercicios Prácticos</h1>
            <p className="lead my-3">Explora los rincones del desarrollo web, sumérgete en fascinantes relatos de viajes y desafía tus habilidades con nuestros ejercicios prácticos. Aquí encontrarás guías, consejos y contenido valioso para inspirarte y aprender.</p>
            <p className="lead mb-0"><a href="/about" className="text-body-emphasis fw-bold">Conoce más sobre mí...</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
