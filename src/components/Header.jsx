import React from "react";

const Header = ({ width, logo, isNightMode, toggleNightMode }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" width={`${width}rem`} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className={`nav-link ${(active) => (active ? "active" : "")}`}
                aria-current="page"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Temas
          </a>
          <ul className="dropdown-menu rounded-top-0 border-top-0">
            <li><a className="dropdown-item" href="/web">Desarrollo Web</a></li>
            <li><a className="dropdown-item" href="/life-style">Life Style</a></li>            
            <li><a className="dropdown-item" href="/travel">Viajando</a></li>
          </ul>
          </li>
            <li className="nav-item">
              <a
                className={`nav-link ${(active) => (active ? "active" : "")}`}
                href="/about"
              >
                Acerca de
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${(active) => (active ? "active" : "")}`}
                href="/contact"
              >
                Contacto
              </a>
            </li>
          </ul>
        </div>
        <button className="btn" onClick={toggleNightMode}>
          {isNightMode ? <i className ="bi bi-brightness-low-fill"></i> : <i className="bi bi-brightness-low"></i>}
        </button>
      </div>
    </nav>
  );
};

export default Header;
