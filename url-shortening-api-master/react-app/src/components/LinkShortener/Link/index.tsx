import React from 'react';
import { Links } from '..';

import styles from './index.module.css';

interface Props {
  link: Links;
}

function Link({ link }: Props) {
  return (
    <div className={styles.linksContainers}>
      <div className={styles.oriContainer}>
        <span>{link.original}</span>
      </div>
      <div className={styles.shortenedContainer}>
        <span>{link.shortened}</span>
        <button>Copy</button>
      </div>
    </div>
  );
}

export default Link;
