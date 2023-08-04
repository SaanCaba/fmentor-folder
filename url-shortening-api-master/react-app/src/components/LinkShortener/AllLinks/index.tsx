import React from 'react';
import { type Links } from '..';
import Link from '../Link';

import styles from './index.module.css';

interface Props {
  links: Links[];
}

function AllLinks({ links }: Props) {
  return (
    <div className={styles.allLinks}>
      {links.map((link) => {
        return <Link link={link} />;
      })}
    </div>
  );
}

export default AllLinks;
