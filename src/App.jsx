import styles from './App.module.scss'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import { FaBars } from 'react-icons/fa'

function App() {
  const [direction, setDirection] = useState('fade')
  const [page, setpage] = useState(
    window.innerWidth > 768
      ? {
          home: true,
          projects: false,
          about: false,
          resume: false,
        }
      : {
          home: true,
          projects: true,
          about: true,
          resume: true,
        }
  )
  let selfclosing = window.innerWidth <= 768 ? true : false
  const [visible, setvisible] = useState(selfclosing)
  let sidebarClassname = visible ? styles.sidebar : styles['sidebar-open']
  let contentClassname = visible ? styles.content : styles['content-open']
  let iconClassname = visible ? styles.icon : styles['icon-open']
  return (
    <>
      <FaBars className={iconClassname} onClick={() => setvisible(!visible)} />
      <Sidebar
        className={sidebarClassname}
        setpage={setpage}
        selfclosing={selfclosing}
        setvisible={setvisible}
        setDirection={setDirection}
      />
      <Content
        className={contentClassname}
        page={page}
        setpage={setpage}
        visible={visible}
        direction={direction}
        setDirection={setDirection}
      />
    </>
  )
}

export default App
