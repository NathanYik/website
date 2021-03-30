import styles from "../css/Resume.module.scss";
import pdf from "../Media/HW.pdf";
import { FaFilePdf } from "react-icons/fa";
const Resume = () => {
  return (
    <div className={styles.resume} id="resume">
      <h1>Like what you see?</h1>
      <h2>Download my resume:</h2>
      <a href={pdf} target="_blank" className={styles.line}>
        <FaFilePdf />
        Jk it's not my resume yet cause I don't have any qualifications :(
      </a>
    </div>
  );
};

export default Resume;
