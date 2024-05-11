import "../Home.css";
import { useNavigate } from "react-router-dom";
function Random() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="titleCard">RANDOM</h1>
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
