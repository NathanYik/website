import styles from "../css/About.module.scss";
import { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
import { FaToolbox } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const About = () => {
  const [languages, setLanguages] = useState(["Java", "C", "C++"]);
  const [FEskills, setFEskills] = useState([
    "HTML",
    "CSS",
    "Sass",
    "JavaScript",
    "React.js",
  ]);
  const [BEskills, setBEskills] = useState(["Node.js", "MySQL", "PostgreSQL"]);
  const [tools, setTools] = useState(["Git", "Unix"]);
  const [skills, setSkills] = useState([
    {
      icon: <FaCode className={styles.img} />,
      desc: "Languages",
      type: languages,
    },
    {
      icon: <FaHtml5 className={styles.img} />,
      desc: "Front End",
      type: FEskills,
    },
    {
      icon: <FaDatabase className={styles.img} />,
      desc: "Back End",
      type: BEskills,
    },
    { icon: <FaToolbox className={styles.img} />, desc: "Tools", type: tools },
  ]);
  return (
    <div className={styles.about} id="about">
      <h1>About Me</h1>
      <div className={styles.container}>
        <div className={styles.description}>
          <p>
            I am a software engineer based in San Diego, California, with a B.S.
            in Mathematics and Computer Science from the University of
            California, San Diego.
          </p>
          <p>
            Here is some more placeholder text until I can figure out what to
            say because holy crap I am realizing that I have no skills and no
            professional background.
          </p>
          <p>
            I am now typing another random paragraph just to get a feel of what
            my portfolio would look like if it actually had some kind of
            substance.
          </p>
        </div>
        <div className={styles.skills}>
          {skills.map((category, index) => (
            <div key={index} className={styles.languages}>
              <div className={styles.icon}>
                {category.icon}
                {category.desc}
              </div>
              <div className={styles.tags}>
                {category.type.map((skill, index) => (
                  <div key={index} className={styles.tag}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contact}>
        <h2>Contact Me</h2>
        <div className={styles.links}>
          <div className={styles.icon}>
            <a href="https://www.linkedin.com/in/nathanyik/">
              <FaLinkedin />
            </a>
            <div className={styles.email}>LinkedIn</div>
          </div>
          <div className={styles.icon}>
            <a href="https://github.com/Pawnnub">
              <FaGithub />
            </a>
            <div className={styles.email}>GitHub</div>
          </div>
          <div className={styles.icon}>
            <a href="mailto:nathany094@gmail.com">
              <FaEnvelope />
            </a>
            <div className={styles.email}>Email</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
