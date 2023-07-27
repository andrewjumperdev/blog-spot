import React, { createContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [isNightMode, setIsNightMode] = useState(
    localStorage.getItem("theme") === "night"
  );

  useEffect(() => {
    document.body.classList.toggle("night-theme", isNightMode);
    localStorage.setItem("theme", isNightMode ? "night" : "day");
  }, [isNightMode]);

  const toggleNightMode = () => {
    setIsNightMode((prevMode) => !prevMode);
  };

  return (
    <ThemeContext.Provider value={{ isNightMode, toggleNightMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
