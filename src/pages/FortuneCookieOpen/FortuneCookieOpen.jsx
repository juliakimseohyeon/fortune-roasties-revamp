import "./FortuneCookieOpen";

export default function FortuneCookieOpen({ generateRandNum }) {
  useEffect(() => {
    const getRandomFortune = async () => {
      try {
        const response = await axios.get(`fortune/${generateRandNum}`);
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
