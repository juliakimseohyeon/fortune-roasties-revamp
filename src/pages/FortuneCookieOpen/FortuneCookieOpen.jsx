import "./FortuneCookieOpen";

export default function FortuneCookieOpen() {
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
