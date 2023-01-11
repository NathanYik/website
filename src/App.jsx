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
  const selfclosing = window.innerWidth <= 768 ? true : false
  const [visible, setVisible] = useState(selfclosing)
  const sidebarClassname = visible ? styles.sidebar : styles['sidebar-open']
  const contentClassname = visible ? styles.content : styles['content-open']
  let menuButtonClassname = visible ? styles.icon : styles['icon-open']

  return (
    <>
      <FaBars
        className={menuButtonClassname}
        onClick={() => setVisible(!visible)}
      />
      <Sidebar
        className={sidebarClassname}
        setpage={setpage}
        selfclosing={selfclosing}
        setVisible={setVisible}
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
