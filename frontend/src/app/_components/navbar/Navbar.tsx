"use client"
import '../../globals.css'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from './../../../../public/logo.png'
import menuIcon from './../../../../public/burger-menu.svg'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react'

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);

  const path = usePathname();

  const toggleNav = () => {
    setIsNavVisible(!isNavVisible);
    console.log(`is nav visible? ${isNavVisible}`)
  };

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
      <div className={styles.nav_icon} onClick={toggleNav}>
        <Image src={menuIcon} alt="Menu" width={35} height={35} />
      </div>
      <nav className={`${styles.nav_links} ${isNavVisible ? styles.nav_links_active : ''}`}>
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
