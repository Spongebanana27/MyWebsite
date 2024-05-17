import "../Home.css";
import "./Random.css";
import { useNavigate } from "react-router-dom";
import Board from "../games/ticTacToe/TicTacToe";

function Random() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="titleCard">RANDOM</h1>
      <Board></Board>
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
