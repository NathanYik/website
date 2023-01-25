import styles from './App.module.scss'
import { useState } from 'react'
import Sidebar from './components/Sidebar'
import Content from './components/Content'
import { FaBars } from 'react-icons/fa'

function App() {
  const [direction, setDirection] = useState('fade')
  const [page, setPage] = useState(
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
  const selfClosing = window.innerWidth <= 768 ? true : false
  const [visible, setVisible] = useState(selfClosing)
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
        setPage={setPage}
        setVisible={setVisible}
        setDirection={setDirection}
      />
      <Content
        className={contentClassname}
        page={page}
        setPage={setPage}
        visible={visible}
        direction={direction}
        setDirection={setDirection}
      />
    </>
  )
}

export default App
