import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import FortuneCookieClosed from "./pages/FortuneCookieClosed/FortuneCookieClosed";
import FortuneCookieOpen from "./pages/FortuneCookieOpen/FortuneCookieOpen";

function App() {
  // const generateRandNum = Math.floor(Math.random() * fortunes.length); // Generate a random number between 0 and index number of fortunes
  const generateRandNum = Math.floor(Math.random() * 10);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<FortuneCookieClosed generateRandNum={generateRandNum} />}
        />
        <Route
          path="/:id"
          element={<FortuneCookieOpen generateRandNum={generateRandNum} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
