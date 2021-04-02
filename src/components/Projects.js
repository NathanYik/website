import Project from "./Project.js";
import { useState } from "react";
import styles from "../css/Projects.module.scss";
import proj1img from "../Media/EmployeePortal.png";
import proj2img from "../Media/port.png";
import proj3img from "../Media/jobs.png";

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
            Technologies Used: HTML, Sass, JavaScript, Node.js, Vue.js, Express,
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
            A personal portfolio designed/created from scratch in React for
            showcasing my projects/professional profile.
          </li>
          <li>You're on this site now!</li>
          <li>Technologies Used: HTML, Sass, JavaScript, React.js</li>
        </ul>
      ),
      website: "https://pawnnub.github.io/website/",
      code: "https://github.com/Pawnnub/website.git",
    },
    {
      title: "Job Application Tracker",
      img: proj3img,
      msg: (
        <ul>
          <li>
            My first dive into solo fullstack web development: a web app for
            tracking all jobs I've applied to.
          </li>
          <li>
            Supports simple CRUD operations (Create/Read/Update/Delete) on a
            list of companies
          </li>
          <li>
            Technologies Used: HTML, Sass, JavaScript, Node.js, React.js,
            Express, PostgreSQL
          </li>
        </ul>
      ),
      website: "https://job-application-hunting.herokuapp.com",
      code: "https://github.com/Pawnnub/Applied-Companies-List",
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
