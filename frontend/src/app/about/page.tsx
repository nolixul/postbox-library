import styles from './page.module.css'
import ProjectInfo from './ProjectInfo'
import FutureFunctionality from './FutureFunctionality'
import Creators from './Creators'
import GetInTouch from './GetInTouch'

export default function About() {
  return (
    <>
      <h1 className={styles.title}>About</h1>
      <main className={styles.container}>
        <ProjectInfo/>
        <FutureFunctionality/>
        <Creators/>
        <GetInTouch/>
      </main>
    </>
  )
}
