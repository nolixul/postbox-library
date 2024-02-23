import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styles from './ResponsiveLinks.module.css'

interface ResponsiveLinksProps {
  isNavVisible: boolean
  toggleNav: () => void
}

const ResponsiveLinks = ({ isNavVisible, toggleNav }: ResponsiveLinksProps) => {
  const path = usePathname()

  return (
    <nav
      className={`${styles.nav_links} ${isNavVisible ? '' : styles.nav_links_hidden}`}
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
  )
}

export default ResponsiveLinks
