// Function to set the theme
const setTheme = (themeName) => {
  localStorage.setItem("theme", themeName);
  document.documentElement.className = themeName;
};

// Function to keep the theme on reload
const keepTheme = () => {
  if (localStorage.getItem("theme")) {
    if (localStorage.getItem("theme") === "theme-dark") {
      setTheme("theme-dark");
    } else if (localStorage.getItem("theme") === "theme-light") {
      setTheme("theme-light");
    }
  } else {
    setTheme("theme-dark");
  }
};
export { setTheme, keepTheme };
