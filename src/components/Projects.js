import Project from "./Project.js";
import { useState } from "react";
import styles from "../css/Projects.module.scss";
import proj1img from "../Media/EmployeePortal.png";
import proj2img from "../Media/Portfolio.png";
import proj3img from "../Media/45.png";

const Projects = ({}) => {
  const [projects, setProjects] = useState([
    {
      title: "Royal Emerald Employee Portal",
      img: proj1img,
      msg: (
        <ul>
          <li>
            An employee portal created for Royal Emerald Pharmaceuticals, a San
            Diego based pharmacy company.
          </li>
          <li>
            Facilitates employee functions such as timesheet generation, event
            scheduling, and hours logging.
          </li>
          <li>
            Technologies Used: HTML, Sass, Javascript, Node.js, Vue.js, Express,
            MySQL
          </li>
        </ul>
      ),
      website: "https://employee.royalemeraldrx.com/",
    },
    {
      title: "Personal Portfolio Website",
      img: proj2img,
      msg: (
        <ul>
          <li>
            A personal portfolio made from scratch in React for showcasing my
            projects/professional profile.
          </li>
          <li>You're on this site now!</li>
          <li>Technologies Used: HTML, Sass, Javascript, React.js</li>
        </ul>
      ),
      website: "https://pawnnub.github.io/website/",
      code: "https://github.com/Pawnnub/website.git",
    },
    {
      title: "Pathfinder Visualizer",
      img: proj3img,
      msg: (
        <ul>
          <li>
            A future project that might be created sometime in the future who
            knows?
          </li>
          <li>One day I'll get a job hopefully</li>
          <li>Technologies Used: C++</li>
        </ul>
      ),
      website: "https://pawnnub.github.io/website/",
      code: "https://github.com/Pawnnub/website.git",
    },
  ]);
  return (
    <div className={styles.projects} id="projects">
      <h1>Projects</h1>
      <div className={styles.container}>
        {projects.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            img={project.img}
            msg={project.msg}
            code={project.code}
            website={project.website}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
