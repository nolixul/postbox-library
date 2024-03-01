import styles from './page.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <section className={styles.container}>
    <section className={styles.container2}>
      <section className={styles.content}>
        <h1 className={styles.title}>Welcome to Postbox Library</h1>
        <p>Get your books here!</p>
        <Link href="/addabook">Add a book</Link>
        <Link href="/ourbookshelf">Our bookshelf</Link>
      </section>
    </section>
    </section>
  )
}
