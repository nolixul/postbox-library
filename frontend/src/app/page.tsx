import styles from './page.module.css'
import Link from 'next/link'
import Image from 'next/image'
import peopleReading from './_homePageImages/people_reading.jpg'

export default function Home() {
  return (
    <section className={styles.container}>
      <section className={styles.text_container}>
        <h2 className={styles.title}>Welcome to Postbox Library</h2>
        <p className={styles.topic_sentence}>A place to share books with friends.</p>
        <p>If you've got a book you want to share - add a book to the bookshelf.</p>
        <p>If you're looking for a book to read, browse the bookshelf and request a book.</p>
        <p>Let's share the love of reading!</p>
      <section className={styles.links_container}>
        <Link href="/addabook">Add a book</Link>
        <Link href="/ourbookshelf">Our bookshelf</Link>
      </section>
      </section>
      <div>
        <Image
          src={peopleReading}
          alt=""
          height={300}
          />
      </div>
    </section>
  )
}
