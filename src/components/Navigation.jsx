import ThemeSwitcher from "./ToggleButton";

// eslint-disable-next-line react/prop-types
const Navigation = ({ width, logo }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-transparent">
      <div className="container-sm">
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
            <li>
              <a
                className={`nav-link ${(active) => (active ? "active" : "")}`}
                href="/dev"
              >
                Desarrollo Web
              </a>
            </li>
            {/* <li>
        <a
          className={`nav-link ${(active) => (active ? "active" : "")}`}
          href="/travel"

        >
          Viajando
        </a>
      </li> */}
            <li className="nav-item">
              <a
                className={`nav-link  ${(active) => (active ? "active" : "")}`}
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
            <li className="nav-item">
              {" "}
              <ThemeSwitcher />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
