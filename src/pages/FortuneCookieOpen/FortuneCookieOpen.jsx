import "./FortuneCookieOpen";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function FortuneCookieOpen({ generateRandNum }) {
  const navigate = useNavigate();
  useEffect(() => {
    const getRandomFortune = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/fortune/${generateRandNum}`
        );
      } catch (err) {
        console.error("Error getting specific fortune: ", err);
      }
    };
    getRandomFortune();
  }, []);

  const handleButtonClick = async () => {
    try {
      navigate("/");
    } catch (err) {
      console.error("Error returning to default page: ", err);
    }
  };
  return (
    <>
      <h1>Here's Your Fortune</h1>
      <button onClick={handleButtonClick}>Get Another Fortune</button>
    </>
  );
}
