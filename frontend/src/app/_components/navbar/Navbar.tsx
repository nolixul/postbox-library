'use client'
import '../../globals.css'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from './../../../../public/logo.png'
import menuIcon from './../../../../public/burger-menu.svg'
import Link from 'next/link'
import { useState } from 'react'
import ResponsiveLinks from '../responsiveLinks/ResponsiveLinks'

const Navbar = () => {
  const [isNavVisible, setIsNavVisible] = useState(false)

  const toggleNav = () => {
    setIsNavVisible(val => !val)
  }

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
      <div className={styles.nav_menu_container}>
        <div className={styles.nav_icon} onClick={toggleNav}>
          <Image src={menuIcon} alt="Menu" width={35} height={35} />
        </div>
        <ResponsiveLinks isNavVisible={isNavVisible} toggleNav={toggleNav} />
      </div>
    </header>
  )
}

export default Navbar
