import Layout from '../Layout';
import DesktopMenu from './Desktop';
import MobileMenu from './Mobile';

function NavBar() {
  return (
    <header>
      <Layout>
        <DesktopMenu />
        <MobileMenu />
      </Layout>
    </header>
  );
}

export default NavBar;
