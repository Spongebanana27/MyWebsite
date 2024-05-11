import { useNavigate } from "react-router-dom";
import "./App.css";
import nickPic3 from "./assets/nickPic3.png";
import nickPic1 from "./assets/nickPic4.png";
import nickPic2 from "./assets/nickPic2.png";

function App() {
  let navigate = useNavigate();

  return (
    <>
      <h1 className="titleCard">THE NICK EVANS EXPERIENCE</h1>
      <img className="mainPicture" src={nickPic1}></img>
      <img className="mainPicture middlePicture" src={nickPic3}></img>
      <img className="mainPicture" src={nickPic2}></img>
      <p className="paragraph">
        Nick Evans is a 21 year old student at The Ohio State University,
        persuing a Bachelors degree in Computer Science & Engineering with a
        minor in Mathematic, currently a Software Development Intern at IGS
        Energy.
      </p>
      <div className="panelContainer">
        <div className="funPanel">
          <h2 className="panelHeader">FUN NICK</h2>
          <button
            className="hobbiesButton"
            onClick={() => {
              navigate("/Hobbies");
            }}
          >
            HOBBIES
          </button>
          <button
            className="favoritesButton"
            onClick={() => {
              navigate("/Favorites");
            }}
          >
            FAVORITES
          </button>
          <button
            className="photosButton"
            onClick={() => {
              navigate("/Photos");
            }}
          >
            PHOTOS
          </button>
        </div>
        <div className="professionalPanel">
          <h2 className="panelHeader">WORK NICK</h2>
          <div>
            <button
              className="resumeButton"
              onClick={() => {
                navigate("/Resume");
              }}
            >
              RESUME
            </button>
            <button
              className="projectsButton"
              onClick={() => {
                navigate("/Projects");
              }}
            >
              PROJECTS
            </button>
            <button
              className="experienceButton"
              onClick={() => {
                navigate("/Experience");
              }}
            >
              EXPERIENCE
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
