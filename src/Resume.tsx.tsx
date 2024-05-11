import { useNavigate } from "react-router-dom";
import "./App.css";
import resume from "./assets/resume.png";

function Resume() {
  const navigate = useNavigate();
  return (
    <>
      <img className="resume" src={resume}></img>
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

export default Resume;
