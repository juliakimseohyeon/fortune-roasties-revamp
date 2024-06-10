import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import FortuneCookieClosed from "./pages/FortuneCookieClosed/FortuneCookieClosed";
import FortuneCookieOpen from "./pages/FortuneCookieOpen/FortuneCookieOpen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FortuneCookieClosed />} />
        <Route path="/:id" element={<FortuneCookieOpen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
