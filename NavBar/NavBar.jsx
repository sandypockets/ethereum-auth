import styles from './NavBar.module.css'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.linkgroup}>
        <Link href="#">
          <a className={styles.anchor}>LOGO</a>
        </Link>
        <Link href="#">
          <a className={styles.anchor}>Shop</a>
        </Link>
        <Link href="#">
          <a className={styles.anchor}>About</a>
        </Link>
      </div>
      <div className={styles.linkgroup}>
        <a className={styles.anchor}>Sign in</a>
      </div>
    </nav>
  )
}