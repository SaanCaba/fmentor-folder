import React, { useRef } from 'react';

import styles from './index.module.css';

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>, link: string) => void;
  setError: (val: string) => void;
  error: string;
}

function Form({ onSubmit, setError, error }: Props) {
  const linkRef = useRef<null | HTMLInputElement>(null);

  return (
    <form
      onSubmit={(e) => onSubmit(e, linkRef.current!.value)}
      className={styles.form}
    >
      <div className={styles.linkContainer}>
        <input
          onChange={() => error.length > 0 && setError('')}
          ref={linkRef}
          placeholder="Shorten a link here..."
        />
      </div>
      <div className={styles.btnContainer}>
        <input type="submit" value="Shorten it!" />
      </div>
    </form>
  );
}

export default Form;
