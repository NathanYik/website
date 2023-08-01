import { useEffect, useState } from 'react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import styles from '../css/Sidebar.module.scss'

const Sidebar = ({ setPage, className, setVisible, setDirection }) => {
  const [type, setType] = useState(window.innerWidth > 768 ? true : false)
  const destinations = [
    {
      destination: { home: true, projects: false, about: false, resume: false },
      desc: 'Home',
    },
    {
      destination: { home: false, projects: true, about: false, resume: false },
      desc: 'Projects',
    },
    {
      destination: { home: false, projects: false, about: true, resume: false },
      desc: 'About',
    },
    {
      destination: { home: false, projects: false, about: false, resume: true },
      desc: 'Resume',
    },
  ]
  const handleWindowChange = () => {
    if (window.innerWidth <= 768 && type === true) {
      setType(false)
      setVisible(true)
    } else if (window.innerWidth > 768 && type === false) {
      setType(true)
      setVisible(false)
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowChange)
    return () => {
      window.removeEventListener('resize', handleWindowChange)
    }
  }, [type])

  return (
    <nav className={className}>
      <div className={styles.padding}></div>
      {destinations.map((button, index) => (
        <a
          href="#portfolio"
          className={styles.btn}
          onClick={() => {
            setPage(button.destination)
            setDirection('fade')
          }}
          key={index}
        >
          {button.desc}
        </a>
      ))}
      {/* <p className={styles.copyright}>Copyright © Nathan Yik 2021</p> */}
      <div className={styles.footer}>
        Contact Me
        <div className={styles.contact}>
          <a href="https://www.linkedin.com/in/nathanyik/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/Pawnnub" target="_blank">
            <FaGithub />
          </a>
          <a href="mailto:nathany094@gmail.com" target="_blank">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar
