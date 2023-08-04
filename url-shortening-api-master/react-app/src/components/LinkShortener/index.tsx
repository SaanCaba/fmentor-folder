import { useState } from 'react';
import { API_URL } from '../../constants';
import Form from './Form';
import styles from './index.module.css';
import AllLinks from './AllLinks';
import { ErrorTypes, SuccessShortened } from '../../types';
import { shortenText } from './utils/shortenText';

export interface Links {
  original: string;
  shortened: string;
}

function LinkShortener() {
  const [allLinks, setAllLinks] = useState<Links[]>([]);
  const [error, setError] = useState('');
  const onSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    link: string
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(`${API_URL}${link}`);
      const result = await response.json();
      if (result.error_code) {
        throw new Error(result.error as string);
      }
      const { result: shortenedResult } = result as SuccessShortened;
      setAllLinks((allLinks) => [
        ...allLinks,
        {
          original: shortenedResult.original_link,
          shortened: shortenedResult.short_link,
        },
      ]);
    } catch (error) {
      const { message } = error as Error;
      setError(message);
    }
  };
  return (
    <section className={styles.linkShortenerSection}>
      <div className={styles.linkShortenerBgImage}>
        <div className={styles.customBg}></div>
        <Form error={error} setError={setError} onSubmit={onSubmit} />
        {error && (
          <div className={styles.errorContainer}>
            <span className={styles.errorText}>{shortenText(error)}</span>
          </div>
        )}
      </div>
      <AllLinks links={allLinks} />
    </section>
  );
}

export default LinkShortener;
