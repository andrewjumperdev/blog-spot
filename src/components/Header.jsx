const Header = ({ coverImage, coverTitle, coverText }) => {

  const backgroundStyle = {
    backgroundImage: `url(${coverImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  };

  return (
    <>
      <div className="container">
        <div style={backgroundStyle} className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
          <div className="col-lg-6 px-0">
            <h1 className="display-4 fst-italic">{coverTitle}</h1>
            <p className="lead my-3">{coverText}</p>
            <p className="lead mb-0"><a href="/about" className="text-body-emphasis fw-bold">Conoce más sobre mí...</a></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
