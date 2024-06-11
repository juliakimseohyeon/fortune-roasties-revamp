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

  useEffect(() => {
    const getRandomFortune = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/fortune/${generateRandNum}`
        );

        setSelectedFortune(response.data.fortune);
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
    <>
      <h1>Here's Your Fortune</h1>
      <div className="open-fortune__result">
        <img src={openFortuneCookieLeft} />
        <p>{selectedFortune}</p>
        <img src={openFortuneCookieRight} />
      </div>
      <button onClick={handleClickReset}>Get Another Fortune</button>
    </>
  );
}
