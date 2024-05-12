import "../Home.css";
import "../Random.css";
import { useNavigate } from "react-router-dom";
import max from "../assets/max.png";

function Random() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="titleCard">RANDOM</h1>
      <img className="randomPic" src={max}></img>
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

export default Random;
