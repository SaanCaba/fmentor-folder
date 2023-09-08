import { type Links } from '..';
import Link from '../Link';

import styles from './index.module.css';

interface Props {
  links: Links[];
}

function AllLinks({ links }: Props) {
  return (
    <div className={styles.allLinks}>
      {links.map((link, i) => {
        return <Link key={i} link={link} />;
      })}
    </div>
  );
}

export default AllLinks;
