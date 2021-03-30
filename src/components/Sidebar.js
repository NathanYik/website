import { useState, useEffect } from "react";
import styles from "../css/Sidebar.module.scss";
const Sidebar = ({ setpage, className, setvisible, setDirection }) => {
  const [type, settype] = useState(window.innerWidth > 768 ? true : false);
  const [destinations, setDestinations] = useState([
    {
      destination: { home: true, projects: false, about: false, resume: false },
      desc: "Home",
    },
    {
      destination: { home: false, projects: true, about: false, resume: false },
      desc: "Projects",
    },
    {
      destination: { home: false, projects: false, about: true, resume: false },
      desc: "About",
    },
    {
      destination: { home: false, projects: false, about: false, resume: true },
      desc: "Resume",
    },
  ]);
  const handleWindowChange = () => {
    if (window.innerWidth <= 768 && type === true) {
      settype(false);
      setvisible(true);
    } else if (window.innerWidth > 768 && type === false) {
      settype(true);
      setvisible(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleWindowChange);
    return () => {
      window.removeEventListener("resize", handleWindowChange);
    };
  }, [type]);
  return (
    <div className={className}>
      <div className={styles.padding}></div>
      {destinations.map((button, index) => (
        <a
          href="#portfolio"
          className={styles.btn}
          onClick={() => {
            setpage(button.destination);
            setDirection("fade");
          }}
          key={index}
        >
          {button.desc}
        </a>
      ))}
    </div>
  );
};

export default Sidebar;
