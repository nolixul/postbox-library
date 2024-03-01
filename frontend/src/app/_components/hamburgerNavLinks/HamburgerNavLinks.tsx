import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './HamburgerNavLinks.module.css'
import Image from 'next/image'
import xIcon from './../../../../public/x-icon.svg'

interface HamburgerNavLinksProps {
  isHamburgerNavVisible: boolean
  toggleNav: () => void
}

const HamburgerNavLinks = ({ isHamburgerNavVisible, toggleNav }: HamburgerNavLinksProps) => {
  const path = usePathname()

  return (
    <div className={isHamburgerNavVisible ? styles.container : ''}>
      <nav
        className={`${styles.nav_links_hamburger} ${isHamburgerNavVisible ? '' : styles.nav_links_hamburger_hidden}`}
      >
        <Link
          onClick={toggleNav}
          className={`${path === '/' ? styles.active_link : ''} ${styles.link}`}
          href="/"
        >
          <h1>Home</h1>
        </Link>
        <Link
          onClick={toggleNav}
          className={`${path === '/ourbookshelf' ? styles.active_link : ''} ${styles.link}`}
          href="/ourbookshelf"
        >
          <h1>Our Bookshelf</h1>
        </Link>
        <Link
          onClick={toggleNav}
          className={`${path === '/addabook' ? styles.active_link : ''} ${styles.link}`}
          href="/addabook"
        >
          <h1>Add A Book</h1>
        </Link>
        <Link
          onClick={toggleNav}
          className={`${path === '/about' ? styles.active_link : ''} ${styles.link}`}
          href="/about"
        >
          <h1>About</h1>
        </Link>
      </nav>
      <div
        className={isHamburgerNavVisible ? '' : styles.xicon_container}
        onClick={toggleNav}
      >
        <Image src={xIcon} alt="Close navigation menu" height={20} width={20} />
      </div>
    </div>
  )
}

export default HamburgerNavLinks
