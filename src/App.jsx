import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FortuneCookieClosed from "./pages/FortuneCookieClosed/FortuneCookieClosed";
import FortuneCookieOpen from "./pages/FortuneCookieOpen/FortuneCookieOpen";

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
  }, []);

  useEffect(() => {
    generateRandNum;
  }, [resetBtnClicked]);

  return (
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
  );
}

export default App;
