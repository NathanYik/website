import styles from "../css/Arrows.module.scss";
import { FaPlay } from "react-icons/fa";
import { useState, useEffect } from "react";
const Arrows = ({ page, setpage, setDirection }) => {
  const name = ["home", "projects", "about", "resume"];
  const initialIdx = () => {
    let ret;
    if (page.home) {
      ret = 0;
    } else if (page.projects) {
      ret = 1;
    } else if (page.about) {
      ret = 2;
    } else if (page.resume) {
      ret = 3;
    }
    return ret;
  };
  const [idx, setIdx] = useState(initialIdx);
  const scrollBack = () => {
    const newIdx = idx - 1 < 0 ? name.length - 1 : idx - 1;
    setDirection("fadeLeft");
    setIdx(newIdx);
    setpage({
      home: false,
      projects: false,
      about: false,
      resume: false,
      [name[newIdx]]: true,
    });
  };
  const scrollForward = () => {
    const newIdx = idx + 1 >= name.length ? 0 : idx + 1;
    setDirection("fadeRight");
    setIdx(newIdx);
    setpage({
      home: false,
      projects: false,
      about: false,
      resume: false,
      [name[newIdx]]: true,
    });
  };

  return (
    <div className={styles.arrows}>
      <a href="#portfolio" className={styles.leftArrow} onClick={scrollBack}>
        <FaPlay />
        {/* {(idx - 1 < 0 ? name.length - 1 : idx - 1) + 1} */}
        {/* Prev */}
      </a>
      <a
        href="#portfolio"
        className={styles.rightArrow}
        onClick={scrollForward}
      >
        <FaPlay />
        {/* {(idx + 1 >= name.length - 1 ? 0 : idx + 1) + 1} */}
        {/* Next */}
      </a>
    </div>
  );
};

export default Arrows;
