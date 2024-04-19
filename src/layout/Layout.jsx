import { useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const logo = "./logo-blog.png";

const Layout = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
      <div className={(isNightMode ? "night-mode" : "day-mode")}>
        <Navigation
          logo={logo}
          width={90}
          isNightMode={isNightMode}
          toggleNightMode={toggleNightMode}
        />
        <main>{children}</main>
        <Footer logo={logo} width={80} />
      </div>
  );
};

export default Layout;
