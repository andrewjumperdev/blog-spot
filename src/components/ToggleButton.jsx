import { useContext } from "react";
import { ThemeContext } from "../layout/ThemeContext";

const ThemeSwitcher = () => {
  const { isNightMode, toggleNightMode } = useContext(ThemeContext);

  return (
    <button type="button" className="btn btn-toggle" data-toggle="button" aria-pressed="false" autoComplete="off" onClick={toggleNightMode}>
      {isNightMode ? <i className ="bi bi-brightness-low-fill"></i> : <i className="bi bi-brightness-low"></i>}
    </button>
  );
};

export default ThemeSwitcher;