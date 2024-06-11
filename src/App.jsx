import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import FortuneCookieClosed from "./pages/FortuneCookieClosed/FortuneCookieClosed";
import FortuneCookieOpen from "./pages/FortuneCookieOpen/FortuneCookieOpen";

function App() {
  const [fortunes, setFortunes] = useState([]);
  console.log("Fortune array length: ", fortunes.length);
  console.log("fortunes: ", fortunes);
  const generateRandNum = Math.floor(Math.random() * fortunes.length); // Generate a random number between 0 and index number of fortunes

  useEffect(() => {
    const getAllFortunes = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/fortune`
        );
        setFortunes(response.data);
        console.log("Received fortunes: ", response.data);
      } catch (err) {
        console.error("Error getting all fortunes: ", err);
      }
    };
    getAllFortunes();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<FortuneCookieClosed generateRandNum={generateRandNum} />}
        />
        <Route
          path="/fortune/:id"
          element={<FortuneCookieOpen generateRandNum={generateRandNum} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
