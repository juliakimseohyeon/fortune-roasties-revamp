import "./FortuneCookieClosed.scss";
import closedFortuneCookie from "../../assets/images/FortuneCookie.svg";
import { useNavigate } from "react-router-dom";

export default function FortuneCookieClosed({
  generateRandNum,
  resetBtnClicked,
  setResetBtnClicked,
}) {
  const navigate = useNavigate();

  const handleClickGetFortune = async () => {
    try {
      navigate(`fortune/${generateRandNum}`);
      setResetBtnClicked(false);
    } catch (err) {
      console.error("Error getting fortune: ", err);
    }
  };

  return (
    <section className="container">
      <h2>
        Open your fortune. <br />
        If you dare...
      </h2>
      <img
        className="closed-fortune__img"
        src={closedFortuneCookie}
        alt={"closed fortune cookie"}
      />
      <button onClick={handleClickGetFortune}>Read Your Fortune</button>
    </section>
  );
}
