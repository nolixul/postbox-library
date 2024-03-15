import styles from './page.module.css'
import Link from 'next/link'

export default function GetInTouch () {
    return (
        <section className={styles.section}>
            <h2 className={styles.subheading}>Get in touch</h2>
            <p>If you have any questions or comments please get in touch: nadia.pavelin@gmail.com</p>
            <p>Or checkout the repository on GitHub:</p>
            <Link href="https://github.com/nolixul/postbox-library" className={styles.link} target="_blank">Postbox library repository</Link>
        </section>
    )
}