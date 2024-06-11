import "./Toggle.scss";
import { useState, useEffect } from "react";
import { setTheme } from "../../utils/themes";

export default function Toggle() {
  const [toggle, setToggle] = useState("dark");
  let theme = localStorage.getItem("theme");

  // OnClick to change theme and toggle
  const handleOnClick = () => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-light");
      setToggle("light");
    } else {
      setTheme("theme-dark");
      setToggle("dark");
    }
  };

  // Ensures the local state toggle always loads with the correct theme
  useEffect(() => {
    if (localStorage.getItem("theme") === "theme-dark") {
      setToggle("dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setToggle("light");
    }
  }, [theme]);

  return (
    <div className="container--toggle">
      <input
        type="checkbox"
        id="toggle"
        className="toggle__checkbox"
        onClick={handleOnClick}
      />
      <label htmlFor="toggle" className="toggle__label">
        <span className="toggle__label-background"></span>
      </label>
    </div>
  );
}
