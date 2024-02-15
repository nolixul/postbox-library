import styles from './page.module.css'

export default function ProjectInfo () {
    return (
        <section className={styles.section}>
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

    )
}