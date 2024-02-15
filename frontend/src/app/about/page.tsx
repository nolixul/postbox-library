import styles from './page.module.css'
import Link from 'next/link'
import FutureFunctionality from './FutureFunctionality'
import Creators from './Creators'

export default function About() {
  return (
    <>
      <h1 className={styles.title}>About</h1>
      <main className={styles.container}>
        <section className={styles.section}>
          <h2 className={styles.subheading}>About the project</h2>
          <p>
            Postbox library was inspired by our love of books. The aim of the
            website is to make it easy to share books with your friends. Users
            list books they want to lend and other users can request to borrow
            those books - sharing the literary love!{' '}
          </p>
          <p>
            We built this website in late 2023 and early 2024. Our aim was to a
            build a full stack web app, in order to deepen our knowledge of
            working with data, UX design and the latest version of Next.js and
            the App Router. We hope you enjoy your time at Postbox Library.
          </p>
          <p>We hope you enjoy your time at Postbox Library.</p>
        </section>

        <FutureFunctionality/>

        <Creators/>

    
           <section className={styles.section}>
                <h2 className={styles.subheading}>Get in touch</h2>
                <p>If you have any questions or comments please get in touch: nadia.pavelin@gmail.com</p>
                <p>Or checkout the repository on GitHub:</p>
                <Link href="https://github.com/nolixul/postbox-library" className={styles.link} target="_blank">Postbox library repository</Link>
           </section>
        </main>
        </>
    )
}
