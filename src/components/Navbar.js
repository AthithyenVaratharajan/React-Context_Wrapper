import horoscopesObj from "../data/horoscopes";
import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";

const Navbar = () => {
  const { setCurrentSign } = useContext(HoroscopeContext);
  const horoscopes = Object.keys(horoscopesObj);
  console.log("re-rendering... ");
  return (
    <nav>
      {horoscopes.map((sign) => (
        <span onClick={() => setCurrentSign(sign)} key={sign}>
          {sign}
        </span>
      ))}
    </nav>
  );
};

export default Navbar;
