import { useState, useEffect } from 'react'
import Home from './Home'
import Projects from './Projects'
import About from './About'
import Resume from './Resume'
import styles from '../css/Content.module.scss'
import '../css/transitions.scss'
import { CSSTransition } from 'react-transition-group'
import Arrows from './Arrows'
import Dots from './Dots'

const Content = ({
  page,
  className,
  setPage,
  visible,
  direction,
  setDirection,
}) => {
  const [pageType, setPageType] = useState([])
  useEffect(() => {
    setPageType([
      {
        content: <Home />,
        dest: page.home,
      },
      {
        content: <Projects />,
        dest: page.projects,
      },
      {
        content: <About />,
        dest: page.about,
      },
      {
        content: <Resume />,
        dest: page.resume,
      },
    ])
  }, [page])
  const [type, settype] = useState(window.innerWidth > 768 ? true : false)
  const handleWindowChange = () => {
    if (window.innerWidth <= 768 && type === true) {
      setPage({ home: true, projects: true, about: true, resume: true })
      settype(false)
    } else if (window.innerWidth > 768 && type === false) {
      settype(true)
      setPage({ home: true, projects: false, about: false, resume: false })
    }
  }
  useEffect(() => {
    window.addEventListener('resize', handleWindowChange)
    return () => {
      window.removeEventListener('resize', handleWindowChange)
    }
  }, [type])
  return (
    <div className={className}>
      <div id="portfolio"></div>
      <div className={styles.header}>
        <p className={styles.title}>Nathan Yik</p>
        <nav className={styles.links}>
          <a href="#portfolio" className={styles.link}>
            Home
          </a>
          <a href="#projects" className={styles.link}>
            Projects
          </a>
          <a href="#about" className={styles.link}>
            About
          </a>
          <a href="#resume" className={styles.link}>
            Resume
          </a>
        </nav>
        <CSSTransition
          in={visible && window.innerWidth > 768}
          appear={true}
          timeout={450}
          classNames="fade1"
          unmountOnExit
        >
          <Dots page={page} />
        </CSSTransition>
      </div>
      {pageType.map((pg, index) => (
        <CSSTransition
          key={index}
          in={pg.dest}
          appear={true}
          timeout={750}
          classNames={direction}
          unmountOnExit
        >
          {pg.content}
        </CSSTransition>
      ))}
      <CSSTransition
        in={visible}
        appear={true}
        timeout={450}
        classNames="fade1"
        unmountOnExit
      >
        <Arrows page={page} setpage={setPage} setDirection={setDirection} />
      </CSSTransition>
    </div>
  )
}

export default Content
