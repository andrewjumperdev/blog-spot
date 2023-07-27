import React, { useState } from "react";
import { ThemeProvider } from "./ThemeContext";
import Header from "../components/Header";
import Footer from "../components/Footer";

const logo = "./logo-blog.png";

const Layout = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider>
      <div className={(isNightMode ? "night-mode" : "day-mode")}>
        <Header
          logo={logo}
          width={90}
          isNightMode={isNightMode}
          toggleNightMode={toggleNightMode}
        />
        <main>{children}</main>
        <Footer logo={logo} width={80} />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
