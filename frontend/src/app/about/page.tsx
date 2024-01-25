import styles from './page.module.css'

export default function About() {
    return(
        <>
        <h1 className={styles.title}>About</h1>
        <main className={styles.card_container}> 
           <section className={styles.card}>
                <h2>About the project</h2>
                <p>Postbox library was inspired by our love of books. The aim of the website is to make it easy to share books with your friends. Users list books they want to lend and other users can request to borrow those books - sharing the literary love! We built this website in late 2023 and early 2024. Our aim was to a build a full stack web app, in order to deepen our knowledge of working with data, UX design and the latest version of Next.js and the App Router. We hope you enjoy your time at Postbox Library.</p>
           </section>
        
           <section className={styles.card}>
                <h2>About the creators</h2>
                <h3 className={styles.subtitle}>Charlotte</h3>
                <p>With a particular interest in front end, I am a full stack software developer. I transitioned to a career in software engineering after 10 years working in the TV industry.</p> 
                <h3 className={styles.subtitle}>Nadia</h3>
                <p>A full stack software developer, working for a non-profit delivering software that improves educational outcomes. At the time of writing this, I’m re-platforming a website that helps people find their dream career.</p>
            </section>


            <section className={styles.card}>
                <h2>Future functionality</h2>
                <p>In the future we would like to add further functionatlity to the website. Including the following features:</p>
                <ul>
                    <li>Users can log in</li>
                    <li>Users can view books they’ve uploaded and also those they’ve requested</li>
                    <li>Email notifications if someone requests a book a user has uploaded</li>
                </ul>
           </section>
    
           <section className={styles.card}>
                <h2>Get in touch</h2>
                <p>If you have any questions or comments please get in touch: nadia.pavelin@gmail.com</p>
                <p>Or checkout the repository on GitHub:</p>
                <a href="https://github.com/nolixul/postbox-library">Postbox library repository</a>
           </section>
        </main>
        </>
    )
}