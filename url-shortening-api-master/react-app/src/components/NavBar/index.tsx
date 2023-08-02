import DesktopMenu from './Desktop';
import MobileMenu from './Mobile';

function NavBar() {
  return (
    <header>
      <DesktopMenu />
      <MobileMenu />
    </header>
  );
}

export default NavBar;
