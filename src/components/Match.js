import { useState, useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

export const Match = () => {
  const [match, setMatch] = useState(false);
  const { sign } = useContext(HoroscopeContext);
  console.log("Match");
  const onClick = () => {
    setMatch((prevMatch) => !prevMatch);
  };

  return (
    <>
      <button onClick={onClick}>Match</button>
      {match && <div>{sign.match}</div>}
    </>
  );
};

export default Match;
