import "./FortuneCookieOpen.scss";
import openFortuneCookieLeft from "../../assets/images/FortuneCookieSplitLeft.svg";
import openFortuneCookieRight from "../../assets/images/FortuneCookieSplitRight.svg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function FortuneCookieOpen({
  generateRandNum,
  resetBtnClicked,
  setResetBtnClicked,
}) {
  const navigate = useNavigate();

  const [selectedFortune, setSelectedFortune] = useState("");
  const [roastCategory, setRoastCategory] = useState("");

  useEffect(() => {
    const getRandomFortune = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/fortune/${generateRandNum}`
        );
        setRoastCategory(response.data.category);
        setSelectedFortune(response.data.fortune);
        return roastCategory;
      } catch (err) {
        console.error("Error getting specific fortune: ", err);
      }
    };
    getRandomFortune();
  }, []);

  const handleClickReset = async () => {
    try {
      setResetBtnClicked(true);
      navigate("/");
    } catch (err) {
      console.error("Error returning to default page: ", err);
    }
  };
  return (
    <section className="container">
      <h2>
        Here's Your Fortune <br /> {roastCategory === "roast" ? "🥵" : "🥳"}
      </h2>
      <div className="open-fortune__result">
        <img className="open-fortune__img" src={openFortuneCookieLeft} />
        <p className="open-fortune__text">{selectedFortune}</p>
        <img className="open-fortune__img" src={openFortuneCookieRight} />
      </div>
      <button onClick={handleClickReset}>Get Another Fortune</button>
      <div className={roastCategory === "roast" && "fire"}></div>
    </section>
  );
}
