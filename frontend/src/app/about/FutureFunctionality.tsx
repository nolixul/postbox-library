import styles from './page.module.css'

export default function FutureFunctionality () {
    return (
        <section className={styles.section}>
          <h2 className={styles.subheading}>Future functionality</h2>
          <p>
            In the future we would like to add further functionality to the
            website.
          </p>
          <p>Including the following features:</p>
          <ul className={styles.futures_features_list}>
            <li>Users can log in</li>
            <li>
              Users can view books they’ve uploaded and also those they’ve
              requested
            </li>
            <li>
              Email notifications if someone requests a book a user has uploaded
            </li>
          </ul>
        </section>
    )
}