import "./App.css";

import { useNavigate } from "react-router-dom";

import scruggs from "./assets/busterScruggs.png";
import baby from "./assets/babyDriver.png";
import french from "./assets/frenchDispatch.png";
import hateful from "./assets/theHatefulEight.png";
import whiplash from "./assets/whiplash.png";

import darkSide from "./assets/darkSide.png";
import jimi from "./assets/jimi.png";
import nirvana from "./assets/nirvana.png";
import pilgrim from "./assets/pilgrim.png";
import brown from "./assets/brownBird.png";

import itysl from "./assets/ITYSL.png";
import cher from "./assets/chernobyl.png";
import smiling from "./assets/smiling.png";
import mg from "./assets/midnight.png";
import bb from "./assets/breakingBad.png";

function Favorites() {
  const navigate = useNavigate();

  return (
    <>
      <h1 className="titleCard">FAVORITES</h1>
      <h2 className="favoritesHeader">Movies</h2>
      <div className="favoriteImages">
        <img className="favoritesPicture" src={scruggs}></img>
        <img className="favoritesPicture" src={hateful}></img>
        <img className="favoritesPicture" src={baby}></img>
        <img className="favoritesPicture" src={whiplash}></img>
        <img className="favoritesPicture" src={french}></img>
      </div>
      <h2 className="favoritesHeader">Music</h2>
      <div className="favoriteImages">
        <img className="favoritesPicture" src={pilgrim}></img>
        <img className="favoritesPicture" src={jimi}></img>
        <img className="favoritesPicture" src={darkSide}></img>
        <img className="favoritesPicture" src={nirvana}></img>
        <img className="favoritesPicture" src={brown}></img>
      </div>
      <h2 className="favoritesHeader">TV</h2>
      <div className="favoriteImages">
        <img className="favoritesPicture" src={mg}></img>
        <img className="favoritesPicture" src={bb}></img>
        <img className="favoritesPicture" src={itysl}></img>
        <img className="favoritesPicture" src={cher}></img>
        <img className="favoritesPicture" src={smiling}></img>
      </div>
      <h2 className="favoritesHeader">Games</h2>
      <div className="favoriteImages"></div>
      <h2 className="favoritesHeader">Books</h2>
      <div className="favoriteImages"></div>
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

export default Favorites;
