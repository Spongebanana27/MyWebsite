import "../Home.css";
import "./Random.css";
import { useNavigate } from "react-router-dom";
import Board from "../games/ticTacToe/TicTacToe";
import Atom from "../assets/ImgProcessing/Atom.mp4";
import SinWaves from "../assets/ImgProcessing/SinWaves.mp4";

function Random() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="titleCard">RANDOM</h1>
      <div className="projectCard">
        <h2 className="projectHeader">Tic-Tac-Toe</h2>
        <Board></Board>
        <h2 />
      </div>
      <div className="projectCard">
        <h2 className="projectHeader">Shader Art - GLSL</h2>
        <video className="shaderArt" autoPlay loop muted>
          <source src={SinWaves} type="video/mp4" />
        </video>
        <video className="shaderArt" autoPlay loop muted>
          <source src={Atom} type="video/mp4" />
        </video>
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

export default Random;
