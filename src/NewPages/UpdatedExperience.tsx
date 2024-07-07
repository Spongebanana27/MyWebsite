import "../Home.css";
import "./UpdatedExperience.css";

function Experience() {
  return (
    <>
      <h1 className="titleCardLine1">Experience</h1>
      <div className="experienceCard">
        <h2 className="experienceTitle">
          IGS Energy - Software Development Intern
        </h2>
        <ul className="experienceList">
          <li className="experienceItem">Founded IGS Energy</li>
        </ul>
      </div>
      <div className="experienceCard">
        <h2 className="experienceTitle">
          Bohrer Lab - Undergraduate Research Assistant
        </h2>
        <ul className="experienceList">
          <li className="experienceItem">
            Built a GUI to increase user experience for an existing MATLAB
            program
          </li>
          <li className="experienceItem">
            Collaborated closely with professionals in the field to understand
            and implement user requirements
          </li>
          <li className="experienceItem">
            Worked to generalize an existing Machine Learning algorithm to more
            accurately fill in carbon flux data
          </li>
        </ul>
      </div>
    </>
  );
}

export default Experience;
