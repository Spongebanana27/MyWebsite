import { useNavigate } from "react-router-dom";
import "../Home.css";
import "./Resume.css";
import resume from "../assets/resume.png";

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
