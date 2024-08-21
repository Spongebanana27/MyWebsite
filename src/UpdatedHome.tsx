import About from "./NewPages/About.tsx";
import UpdatedExperience from "./NewPages/UpdatedExperience.tsx";
import UpdatedProjects from "./NewPages/UpdatedProjects.tsx";
import "./UpdatedHome.css";

function UpdatedHome() {

  return (
    <div className="page">
      <div className="hero">
      <div className="canvas" ></div>
      <div className="titleCard">
      <div className="titleCardLine1">Hey! I'm Nick.</div>
      <div className="titleCardLine2">I am a CSE student at OSU.</div>
      </div>
      </div>
      <About/>
      <UpdatedProjects/>
      <UpdatedExperience/>
    </div>
  );
}

export default UpdatedHome;
