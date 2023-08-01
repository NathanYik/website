import { useState } from 'react'
import styles from '../css/Project.module.scss'
import Popup from './Popup'
import { CSSTransition } from 'react-transition-group'
import '../css/transitions.scss'
const Project = ({ title, website, code, img, msg }) => {
  const [visible, setVisible] = useState(false)
  const github = code ? (
    <a className={styles.link} href={code} target="_blank">
      Github
    </a>
  ) : (
    <p className={styles.unavailable}>Private source</p>
  )
  return (
    <div className={styles.project}>
      <CSSTransition
        in={visible}
        timeout={350}
        classNames="fade1"
        unmountOnExit
      >
        <Popup img={img} setvisible={setVisible} />
      </CSSTransition>
      <h1 className={styles.title}>{title}</h1>
      <div className={styles.links}>
        <a className={styles.link} href={website} target="_blank">
          Demo
        </a>
        {github}
      </div>
      <div className={styles.container}>
        <img
          src={img}
          className={styles.img}
          onClick={() => {
            setVisible(!visible)
          }}
        />
        <div className={styles.description}>{msg}</div>
      </div>
    </div>
  )
}

export default Project
