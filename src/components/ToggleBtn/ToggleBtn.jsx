import { useEffect, useState } from "react";
import "./ToggleBtn.css";
import { useThemeContext } from "../../context/ThemeContext";

const ToggleBtn = () => {

  const { toggleDarkMode } = useThemeContext();

  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider" onClick={toggleDarkMode}></span>
    </label>
  );
};

export default ToggleBtn;
