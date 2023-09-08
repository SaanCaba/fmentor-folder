import Layout from '../Layout';
import DesktopMenu from './Desktop';
import MobileMenu from './Mobile';
import styles from './index.module.css';
function NavBar() {
  return (
    <header className={styles.header}>
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}

export default NavBar;
