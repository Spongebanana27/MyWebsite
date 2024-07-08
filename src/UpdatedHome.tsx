import About from "./NewPages/About.tsx";
import UpdatedExperience from "./NewPages/UpdatedExperience.tsx";
import UpdatedProjects from "./NewPages/UpdatedProjects.tsx";
import Contact from "./NewPages/Contact.tsx";
import "./UpdatedHome.css";

function UpdatedHome() {
  return (
    <>
      <div className="hero">
        <div className="canvas"></div>
        <div className="titleCard">
          <div className="titleCardLine1">Hey! I'm Nick.</div>
          <div className="titleCardLine2">I am a CSE student at OSU.</div>
          <a className="frontButton" href="#about">
            View my work
          </a>
        </div>
      </div>
      <About />
      <UpdatedProjects />
      <UpdatedExperience />
      <Contact />
    </>
  );
}

export default UpdatedHome;
