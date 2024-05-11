import "./App.css";
import { useNavigate } from "react-router-dom";
function Photos() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="titleCard">PHOTOS</h1>
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

export default Photos;
