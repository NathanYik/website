import styles from '../css/About.module.scss'
import { FaEnvelope } from 'react-icons/fa'
import { FaHtml5 } from 'react-icons/fa'
import { FaCode } from 'react-icons/fa'
import { FaToolbox } from 'react-icons/fa'
import { FaDatabase } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
const About = () => {
  const languages = [
    'JavaScript',
    'TypeScript',
    'HTML',
    'CSS',
    'Java',
    'Python',
    'C',
    'C++',
  ]
  const frontendSkills = ['React', 'Vue', 'Svelte', 'Solid']
  const backendSkills = [
    'Ruby on Rails',
    'Node.js',
    'Express',
    'MySQL',
    'PostgreSQL',
  ]
  const tools = ['Git', 'Unix']
  const skills = [
    {
      icon: <FaCode className={styles.img} />,
      desc: 'Languages',
      type: languages,
    },
    {
      icon: <FaHtml5 className={styles.img} />,
      desc: 'Front End',
      type: frontendSkills,
    },
    {
      icon: <FaDatabase className={styles.img} />,
      desc: 'Back End',
      type: backendSkills,
    },
    { icon: <FaToolbox className={styles.img} />, desc: 'Tools', type: tools },
  ]

  return (
    <section className={styles.about} id="about">
      <h1>About Me</h1>
      <div className={styles.container}>
        <article className={styles.description}>
          <p>
            Hello! My name is Nathan, I am a software engineer based in
            California, with a B.S. in Mathematics - Computer Science from the
            University of California, San Diego.
          </p>
          <p>
            I primarily focus on fullstack web development, with my main working
            experience being in React and Ruby on Rails so far. However, I love
            exploring other technologies as well! Recently Solid and Qwik have
            caught my eye, and I'm closely following their development. I also
            love Vim and am a Neovim enthusiast.
          </p>
          <p>
            I am open to communicate! For professional inquiries, feel free to
            contact me at
            <a
              className={styles.desc}
              href="mailto:nathany094@gmail.com"
              target="_blank"
            >
              {' '}
              nathany094@gmail.com
            </a>
            . I am always looking for opportunities to improve my skillset in
            software engineering.
          </p>
        </article>
        <div className={styles.skills}>
          {skills.map((category, index) => (
            <div key={index} className={styles.languages}>
              <div className={styles.icon}>
                {category.icon}
                {category.desc}
              </div>
              <div className={styles.tags}>
                {category.type.map((skill, index) => (
                  <div key={index} className={styles.tag}>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.contact}>
        <h2>Contact Me</h2>
        <div className={styles.links}>
          <div className={styles.icon}>
            <a
              className={styles.link}
              href="https://www.linkedin.com/in/nathanyik/"
              target="_blank"
            >
              <FaLinkedin />
              <div className={styles.email}>LinkedIn</div>
            </a>
          </div>
          <div className={styles.icon}>
            <a
              className={styles.link}
              href="https://github.com/Pawnnub"
              target="_blank"
            >
              <FaGithub />
              <div className={styles.email}>GitHub</div>
            </a>
          </div>
          <div className={styles.icon}>
            <a
              className={styles.link}
              href="mailto:nathany094@gmail.com"
              target="_blank"
            >
              <FaEnvelope />
              <div className={styles.email}>Email</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
