import "./About.css";
import cs from "../assets/Skills/csn.png";
import cp from "../assets/Skills/c++.png";
import git from "../assets/Skills/git.png";
import js from "../assets/Skills/javascript.png";
import net from "../assets/Skills/net.png";
import python from "../assets/Skills/python.png";
import unity from "../assets/Skills/unity.png";
import sql from "../assets/Skills/sql.png";
import react from "../assets/Skills/react.png";
import opengl from "../assets/Skills/openGL.png";
import graphql from "../assets/Skills/gql.png";
import nickPic from "../assets/nickPic4.png";

function About() {
  return (
    <>
      <div className="aboutSection" id="about">
        <h1 className="aboutHeader sectionHeader">About</h1>
        <div className="aboutCard">
          <div className="aboutCardLeft">
            <div className="nickPhoto">
              <img src={nickPic} className="nickPic"></img>
            </div>
            <div className="aboutBlurb">
              I am a problem solver and a passionate learner. While my main
              areas of interest are in 3D graphics and full stack web
              development, I love to learn new things, having self-taught
              various topics such as neural networks, game design, and 2D shader
              art. When I am not coding, I enjoy reading, playing guitar and
              rock climbing.
            </div>
          </div>
          <div className="aboutCardRight">
            <div className="skillColumn">
              <div className="skillCard">
                <img src={cp} className="skillPic"></img>
                <div className="skillSub">C</div>
              </div>
              <div className="skillCard">
                <img src={cs} className="skillPic"></img>
                <div className="skillSub">C#</div>
              </div>
              <div className="skillCard">
                <img src={js} className="skillPic"></img>
                <div className="skillSub">JAVASCRIPT</div>
              </div>
              <div className="skillCard">
                <img src={python} className="skillPic"></img>
                <div className="skillSub">PYTHON</div>
              </div>
            </div>
            <div className="skillColumn">
              <div className="skillCard">
                <img src={opengl} className="skillPic"></img>
                <div className="skillSub">OPENGL</div>
              </div>
              <div className="skillCard">
                <img src={unity} className="skillPic"></img>
                <div className="skillSub">UNITY</div>
              </div>
              <div className="skillCard">
                <img src={git} className="skillPic"></img>
                <div className="skillSub">GIT</div>
              </div>
            </div>
            <div className="skillColumn">
              <div className="skillCard">
                <img src={sql} className="skillPic"></img>
                <div className="skillSub">SQL</div>
              </div>
              <div className="skillCard">
                <img src={react} className="skillPic"></img>
                <div className="skillSub">REACT</div>
              </div>
              <div className="skillCard">
                <img src={graphql} className="skillPic"></img>
                <div className="skillSub">GRAPHQL</div>
              </div>
              <div className="skillCard">
                <img src={net} className="skillPic"></img>
                <div className="skillSub">.NET</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
