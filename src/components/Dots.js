import styles from "../css/Dots.module.scss";
const Dots = ({ page }) => {
  const pages = ["home", "projects", "about", "resume"];
  return (
    <div className={styles.dots}>
      {pages.map((pg, index) => (
        <div
          key={index}
          className={page[pg] ? styles.brightdot : styles.dot}
        ></div>
      ))}
    </div>
  );
};

export default Dots;
