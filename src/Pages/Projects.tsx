import "../Home.css";
import "./Projects.css";
import { useNavigate } from "react-router-dom";

import original from "../assets/ImgProcessing/Buddy.jpeg";
import quantized from "../assets/ImgProcessing/Buddy.jpeg_Quantized_32.jpeg";
import dithered from "../assets/ImgProcessing/dithered.png";
import kuwahara from "../assets/ImgProcessing/kuwahara.png";
import pixels from "../assets/ImgProcessing/pixels.png";
import sharpened from "../assets/ImgProcessing/sharpened.5.png";

import bigPerc from "../assets/Tiles/perc.25.png";
import smallPerc from "../assets/Tiles/percSmall.png";

function Projects() {
  const navigate = useNavigate();
  return (
    <>
      <h1 className="titleCard">PROJECTS</h1>
      <div className="projectCard">
        <h2 className="projectHeader">This Website - Typescript / React.js</h2>
        <ul className="projectList">
          <li className="projectItem">Designed and built this website</li>
        </ul>
      </div>
      <div className="projectCard">
        <h2 className="projectHeader">Image Processing - OpenGL / Python</h2>
        <ul className="projectList">
          <li className="projectItem">
            Designed and implemented a custom user-friendly Color Quantization
            algorithm in Python
          </li>
          <li className="projectItem">
            Implemented Ordered Dithering, Sharpening, Kuwahara Filtering, and
            Pixelation shaders in OpenGL
          </li>
        </ul>
        <img src={original} className="buddyImage"></img>
        <img src={kuwahara} className="buddyImage"></img>
        <img src={quantized} className="buddyImage"></img>
        <img src={dithered} className="buddyImage"></img>
        <img src={pixels} className="buddyImage"></img>
        <img src={sharpened} className="buddyImage"></img>
      </div>
      <div className="projectCard">
        <h2 className="projectHeader">Legend of Zelda NES - C# / .NET / Git</h2>
        <ul className="projectList">
          <li className="projectItem">
            Worked with a team of 6 to develop Legend of Zelda for the NES in
            monogame
          </li>
          <li className="projectItem">
            Conducted dozens of code reviews to ensure code quality,
            maintainability, and readability
          </li>
          <li className="projectItem">
            Participated in all stages including planning, development, testing,
            reviewing and deploying
          </li>
        </ul>
      </div>
      <div className="projectCard">
        <h2 className="projectHeader">Tile Percolation Game - Java / Python</h2>
        <ul className="projectList">
          <li className="projectItem">
            Built software in Java to explore percolation applied to a square
            lattice
          </li>
          <li className="projectItem">
            Redesigned software in Python to create an interactive percolation
            game
          </li>
        </ul>
        <img src={bigPerc} className="percPicture"></img>
        <img src={smallPerc} className="percPicture"></img>
      </div>
      <div className="projectCard">
        <h2 className="projectHeader">Student Grade Management Software - C</h2>
        <ul className="projectList">
          <li className="projectItem">
            Built a program organizing student's grades in C from a linux
            command line
          </li>
          <li className="projectItem">
            Utilized concepts such as linked lists and structs to store, search,
            and update student data
          </li>
          <li className="projectItem">
            Created Makefiles and Header files to ensure efficiency and
            maintainability
          </li>
          <li className="projectItem">
            Used Valgrind and safe programming practices to ensure no memory
            leaks or other vulnerabilities
          </li>
        </ul>
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

export default Projects;
