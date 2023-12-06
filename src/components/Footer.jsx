import PropTypes from 'prop-types';

const Footer = ({ logo, width }) => {
  return (
    <footer id="theme-colors" className=" container d-flex flex-wrap justify-content-between align-items-center pt-3 mt-4 border-top">
      <p className="col-md-4 mb-0 text-body-secondary">© 2023 Andrew Alfaro</p>

      <a
        href="/"
        className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <img className="me-2" src={logo} alt="logo" width={`${width}rem`} />
      </a>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a href="/" className="nav-link px-2 text-body-secondary">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link px-2 text-body-secondary">
            Contact
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link px-2 text-body-secondary">
            About
          </a>
        </li>
      </ul>
    </footer>
  );
};


Footer.propTypes = {
  logo: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};


export default Footer;
