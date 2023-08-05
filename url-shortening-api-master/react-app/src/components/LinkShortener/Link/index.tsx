import { useState } from 'react';
import { Links } from '..';

import styles from './index.module.css';

interface Props {
  link: Links;
}

function Link({ link }: Props) {
  const [copied, setCopied] = useState(false);
  const onCopy = () => {
    navigator.clipboard.writeText(link.shortened);
    setCopied(!copied);
  };
  return (
    <div className={styles.linksContainers}>
      <div className={styles.oriContainer}>
        <span>{link.original}</span>
      </div>
      <div className={styles.shortenedContainer}>
        <span>{link.shortened}</span>
        <button
          className={copied ? styles.copied : styles.noCopied}
          onClick={onCopy}
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
}

export default Link;
