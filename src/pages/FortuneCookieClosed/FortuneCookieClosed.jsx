import "./FortuneCookieClosed";
import closedFortuneCookie from "../../assets/images/FortuneCookie.svg";
import { useNavigate } from "react-router-dom";

export default function FortuneCookieClosed({ generateRandNum }) {
  const navigate = useNavigate();

  const handleClickGetFortune = async () => {
    try {
      navigate(`fortune/${generateRandNum}`);
    } catch (err) {
      console.error("Error getting fortune: ", err);
    }
  };

  return (
    <section className="container">
      <h1>Fortune Roasties</h1>
      <h2>Open your fortune, if you dare...</h2>
      <img src={closedFortuneCookie} alt={"closed fortune cookie"} />
      <button onClick={handleClickGetFortune}>Read Your Fortune</button>
    </section>
  );
}
