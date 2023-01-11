import styles from "../css/Popup.module.scss";
const popup = ({ img, setvisible }) => {
  return (
    <div className={styles.popup} onClick={() => setvisible(false)}>
      <p className={styles.msg}>Click anywhere to exit</p>
      <img src={img} onClick={() => setvisible(false)} className={styles.img} />
    </div>
  );
};

export default popup;
