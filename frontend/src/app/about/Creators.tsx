import styles from './page.module.css'
import Image from 'next/image'
import charlottePic from './profile-photos/charlotte.png'
import nadiaPic from './profile-photos/nadia.jpeg'
import jessPic from './profile-photos/jess.jpg'

export default function Creators () {
    return (
        <section className={styles.about_the_creators_container}>
          <h2
            className={`${styles.subheading} ${styles.about_the_creators_header}`}>
            About the creators
          </h2>

          <div className={styles.creator_text_container}>
            <h3 className={styles.creator_name}>Charlotte</h3>
            <p>
              With a particular interest in front end, I am a full stack
              software developer. I transitioned to a career in software
              engineering after 10 years working in the TV industry.
            </p>
          </div>

          <div className={styles.profile_photo_container}>
            <Image
              src={charlottePic}
              alt="Charlotte"
              className={styles.profile_photo}
            />
          </div>

          <div className={styles.middle_creator_text_container}>
            <h3 className={styles.creator_name}>Nadia</h3>
            <p>
              A full stack software developer, working for a non-profit
              delivering software that improves educational outcomes. At the
              time of writing this, I’m re-platforming a website that helps
              people find their dream career.
            </p>
          </div>

          <div className={styles.middle_profile_photo_container}>
                    <Image src={nadiaPic} alt="Nadia" className={`${styles.profile_photo} ${styles.profile_photo_nadia}`}/>
          </div>
                
          <div className={styles.creator_text_container}>
            <h3 className={styles.creator_name}>Jess</h3>
            <p>A full-stack software developer, with a passion for frontend, working for a non-profit to prevent degree fraud.</p>
          </div>

          <div className={styles.profile_photo_container}>
            <Image src={jessPic} alt="Jess" className={styles.profile_photo}/>
          </div>
          
          </section>
    )
}