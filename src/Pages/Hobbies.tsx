import "../Home.css";
import "./Hobbies.css";
import gin from "../assets/gin.png";
import strat from "../assets/strat.png";
import { useNavigate } from "react-router-dom";
function Hobbies() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="titleCard">HOBBIES</h1>
      <div className="hobbyCard">
        <h2 className="hobbyHeader">Guitar</h2>
        <p className="hobbyDescription">
          Started teaching myself when the pandemic hit. Still play everyday.
        </p>
        <div className="guitarCard">
          <img className="guitarPicture" src={gin}></img>
          <ul className="hobbyList">
            My Gear:
            <li className="hobbyItem">Buttercream Fender Stratocaster</li>
            <li className="hobbyItem">Gretsch G9520E Gin Rickey Parlor</li>
            <li className="hobbyItem">Yamaha FS800 (My first guitar)</li>
            <li className="hobbyItem">Fender Mustang LT25 Amp</li>
            <li className="hobbyItem">BOSS RC-1 Loop Station</li>
            <li className="hobbyItem">Donner Blues Overdrive</li>
            <li className="hobbyItem">Donner Wah Pedal</li>
          </ul>
          <img className="guitarPicture" src={strat}></img>
        </div>
      </div>
      <div className="hobbyCard">
        <h2 className="hobbyHeader">Bouldering</h2>
        <p className="hobbyDescription">
          Started bouldering in March 2024. Just recently climbed my first V4.
          Thinking I'll free solo El Cap at the end of the season.
        </p>
      </div>
      <button
        className="homeButton"
        onClick={() => {
          navigate("../");
        }}
      >
        RETURN HOME
      </button>
    </>
  );
}

export default Hobbies;
