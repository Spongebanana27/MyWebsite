import { useNavigate } from "react-router-dom";
import "./Home.css";
import nickPic3 from "./assets/nickPic3.png";
import nickPic1 from "./assets/nickPic4.png";
import nickPic2 from "./assets/nickPic2.png";

function Home() {
  let navigate = useNavigate();

  return (
    <>
      <h1 className="titleCard">Hey! I'm Nick.</h1>
      <img className="mainPicture" src={nickPic1}></img>
      <img className="mainPicture middlePicture" src={nickPic3}></img>
      <img className="mainPicture" src={nickPic2}></img>
      <p className="paragraph">
        I am a problem solver with a passion for learning new things. I am majoring in Computer Science & Engineering with a minor in Mathematics at The Ohio State University.
      </p>
      <div className="panelContainer">
        <div className="funPanel">
          <h2 className="panelHeader">About Me</h2>
          <button
            className="hobbiesButton"
            onClick={() => {
              navigate("/Hobbies");
            }}
          >
            Hobbies
          </button>
          <button
            className="favoritesButton"
            onClick={() => {
              navigate("/Favorites");
            }}
          >
            Favorites
          </button>
          <button
            className="randomButton"
            onClick={() => {
              navigate("/Random");
            }}
          >
            Random
          </button>
        </div>
        <div className="professionalPanel">
          <h2 className="panelHeader">My Work</h2>
          <div>
            <button
              className="resumeButton"
              onClick={() => {
                navigate("/Resume");
              }}
            >
              Resume
            </button>
            <button
              className="projectsButton"
              onClick={() => {
                navigate("/Projects");
              }}
            >
              Projects
            </button>
            <button
              className="experienceButton"
              onClick={() => {
                navigate("/Experience");
              }}
            >
              Experience
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
