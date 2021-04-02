import React from "react";
import styles from "../css/Home.module.scss";
import "../css/transitions.scss";
import pic from "../Media/circle-cropped.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
const Home = () => {
  return (
    <div className={styles.home} id="home">
      <div className={styles.container2}>
        <img src={pic} className={styles.img} />
      </div>
      <div className={styles.container1}>
        <h1 className={styles.title}>Nathan Yik</h1>
        <p className={styles.description}>
          Software Developer | Software Engineer
        </p>
        <div className={styles.links}>
          <a href="https://www.linkedin.com/in/nathanyik/" target="_blank">
            <div className={styles.line}>
              <FaLinkedin /> LinkedIn
            </div>
          </a>
          <a href="https://github.com/Pawnnub" target="_blank">
            <div className={styles.line}>
              <FaGithub /> GitHub
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
