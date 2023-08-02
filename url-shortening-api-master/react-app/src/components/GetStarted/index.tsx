import React from 'react';

import styles from './index.module.css';
import GetStartedSvg from './GetStartedSvg';
import GetStartedButton from '../Helpers/GetStartedButton';

function GetStarted() {
  return (
    <section className={styles.getStartedSection}>
      <div className={styles.infoContainer}>
        <h1 className={styles.title}>More than just shorter links</h1>
        <p className={styles.paragraph}>
          <span> Build your brand's recognition and get detailed</span>
          <span>insights on how your links are performing.</span>
        </p>
        <GetStartedButton />
      </div>
      <div className={styles.svgContainer}>
        <GetStartedSvg />
      </div>
    </section>
  );
}

export default GetStarted;
