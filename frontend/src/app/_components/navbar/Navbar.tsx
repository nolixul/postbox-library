"use client"
import '../../globals.css'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from './../../../../public/logo.png'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const path = usePathname();

  return (
    <header className={styles.navigation}>
      <div className={styles.container}>
        <Link href="/">
          <Image src={logo} alt="Postbox Library" width={50} height={50} />
        </Link>
        <Link className={styles.link}  href="/">
          <h1>Postbox Library</h1>
        </Link>
      </div>
      <nav className={styles.nav_links}>
        <Link className={`${path === "/" ? styles.active_link : ""} ${styles.link}`} href="/">
          <h1>Home</h1>
        </Link>
        <Link className={`${path === "/ourbookshelf" ? styles.active_link : ""} ${styles.link}`} href="/ourbookshelf">
          <h1>Our Bookshelf</h1>
        </Link>
        <Link className={`${path === "/addabook" ? styles.active_link : ""} ${styles.link}`} href="/addabook">
          <h1>Add A Book</h1>
        </Link>
        <Link className={`${path === "/about" ? styles.active_link : ""} ${styles.link}`} href="/about">
          <h1>About</h1>
        </Link>
      </nav>
    </header>
  )
}

export default Navbar
