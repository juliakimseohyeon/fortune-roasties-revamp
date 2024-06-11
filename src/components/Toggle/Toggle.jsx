import "./Toggle.scss";
import { useState } from "react";
import { setTheme } from "../../utils/themes";

export default function Toggle() {
  const [toggle, setToggle] = useState("dark");
  let theme = localStorage.getItem("theme");

  return (
    <div className="container--toggle">
      <input type="checkbox" id="toggle" className="toggle--checkbox" />
      <label htmlFor="toggle" className="toggle--label">
        <span className="toggle--label-background"></span>
      </label>
    </div>
  );
}
