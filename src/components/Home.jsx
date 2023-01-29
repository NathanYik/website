import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from '../css/Home.module.scss'
import '../css/transitions.scss'
import pic from '../Media/circle-cropped.png'

const Home = () => {
  return (
    <section className={styles.home} id="home">
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
    </section>
  )
}

export default Home
