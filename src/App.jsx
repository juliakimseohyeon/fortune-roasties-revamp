import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import { keepTheme } from "./utils/themes";
import axios from "axios";
import FortuneCookieClosed from "./pages/FortuneCookieClosed/FortuneCookieClosed";
import FortuneCookieOpen from "./pages/FortuneCookieOpen/FortuneCookieOpen";
import Toggle from "./components/Toggle/Toggle";

function App() {
  const [fortunes, setFortunes] = useState([]);
  const [resetBtnClicked, setResetBtnClicked] = useState(false);

  const generateRandNum = Math.floor(Math.random() * fortunes.length); // Generate a random number between 0 and index number of fortunes

  useEffect(() => {
    const getAllFortunes = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/fortune`
        );
        setFortunes(response.data);
      } catch (err) {
        console.error("Error getting all fortunes: ", err);
      }
    };
    getAllFortunes();
    keepTheme(); // Keep dark or light mode theme
  }, []);

  useEffect(() => {
    generateRandNum;
  }, [resetBtnClicked]);

  return (
    <>
      <Toggle />
      <h1>Fortune Roasties</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <FortuneCookieClosed
                generateRandNum={generateRandNum}
                resetBtnClicked={resetBtnClicked}
                setResetBtnClicked={setResetBtnClicked}
              />
            }
          />
          <Route
            path="/fortune/:id"
            element={
              <FortuneCookieOpen
                generateRandNum={generateRandNum}
                resetBtnClicked={resetBtnClicked}
                setResetBtnClicked={setResetBtnClicked}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
