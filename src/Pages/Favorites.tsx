import "../Home.css";
import "./Favorites.css";

import { useNavigate } from "react-router-dom";

import scruggs from "../assets/busterScruggs.png";
import baby from "../assets/babyDriver.png";
import french from "../assets/frenchDispatch.png";
import hateful from "../assets/theHatefulEight.png";
import whiplash from "../assets/whiplash.png";

import darkSide from "../assets/darkSide.png";
import jimi from "../assets/jimi.png";
import nirvana from "../assets/nirvana.png";
import pilgrim from "../assets/pilgrim.png";
import brown from "../assets/brownBird.png";

import itysl from "../assets/ITYSL.png";
import bojack from "../assets/bojack.png";
import smiling from "../assets/smiling.png";
import mg from "../assets/midnight.png";
import arcane from "../assets/arcane2.png";

import piranesi from "../assets/Books/piranesi.png";
import circe from "../assets/Books/circe.png";
import fifth from "../assets/Books/fifthScience.png";
import sisyphus from "../assets/Books/sisyphus.png";
import hail from "../assets/Books/hailMary.png";

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
      <h2 className="favoritesHeader">Shows</h2>
      <div className="favoriteImages">
        <img className="favoritesPicture" src={mg}></img>
        <img className="favoritesPicture" src={bojack}></img>
        <img className="favoritesPicture" src={itysl}></img>
        <img className="favoritesPicture" src={arcane}></img>
        <img className="favoritesPicture" src={smiling}></img>
      </div>
      <h2 className="favoritesHeader">Books</h2>
      <div className="favoriteImages">
        <img className="favoritesPicture" src={circe}></img>
        <img className="favoritesPicture" src={piranesi}></img>
        <img className="favoritesPicture" src={sisyphus}></img>
        <img className="favoritesPicture" src={fifth}></img>
        <img className="favoritesPicture" src={hail}></img>
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

export default Favorites;
