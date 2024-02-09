import React from 'react'
import '../../globals.css'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from './../../../../public/logo.png'
import Link from 'next/link'

const Navbar: React.FC = () => {
  return (
    <header className={styles.navigation}>
      <div className={styles.container}>
        <Link href="/">
          <Image src={logo} alt="Postbox Library" width={50} height={50} />
        </Link>
        <Link className={styles.link} href="/">
          <h1>Postbox Library</h1>
        </Link>
      </div>
      <nav className={styles.nav_links}>
        <Link className={styles.link} href="">
          <h2>Home</h2>
        </Link>
        <Link className={styles.link} href="">
          <h2>Our Bookshelf</h2>
        </Link>
        <Link className={styles.link} href="">
          <h2>Add A Book</h2>
        </Link>
        <Link className={styles.link} href="/about">
          <h2>About</h2>
        </Link>
      </nav>
    </header>
  )
}
// can't get the image to show up
// working on getting styling to work
export default Navbar
