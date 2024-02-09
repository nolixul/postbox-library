import React from 'react'
import '../../globals.css'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from './../../../../public/logo.png'

const Navbar: React.FC = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.container}>
        <Image src={logo} alt="" width={50} height={50} />
        <h1>Postbox Library</h1>
      </div>
      <nav className={styles.nav_links}>
          <a>
            <h2 className={styles.link}>Home</h2>
            </a>
          <a>
            <h2 className={styles.link}>Our Bookshelf</h2>
          </a>
          <a>
            <h2 className={styles.link}>Add A Book</h2>
          </a>
          <a>
            <h2 className={styles.link}>About</h2>
          </a>
      </nav>
    </header>
  )
}
// can't get the image to show up
// working on getting styling to work
export default Navbar
