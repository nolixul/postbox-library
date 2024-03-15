'use client'
import '../../globals.css'
import styles from './Navbar.module.css'
import Image from 'next/image'
import logo from './../../../../public/logo.png'
import menuIcon from './../../../../public/burger-menu.svg'
import Link from 'next/link'
import { useState } from 'react'
import HamburgerNavLinks from '../hamburgerNavLinks/HamburgerNavLinks'

const Navbar = () => {
  const [isHamburgerNavVisible, setisHamburgerNavVisible] = useState(false)

  const toggleNav = () => {
    setisHamburgerNavVisible(val => !val)
  }

  return (
    <header className={styles.navigation}>
      <div className={styles.container}>
        <div className={styles.logo_and_company_name_container}>
          <Link href="/">
            <Image src={logo} alt="Postbox Library" width={50} height={50} />
          </Link>
          <Link className={styles.link} href="/">
            <h1>Postbox Library</h1>
          </Link>
        </div>
        <div className={styles.hamburger_container} onClick={toggleNav}>
          <Image src={menuIcon} alt="Menu" width={35} height={35} />
        </div>
      </div>
      <HamburgerNavLinks
        isHamburgerNavVisible={isHamburgerNavVisible}
        toggleNav={toggleNav}
      />
    </header>
  )
}

export default Navbar
