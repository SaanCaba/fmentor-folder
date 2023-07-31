import styles from './index.module.css';

function ResultCard() {
  return (
    <section className={styles.resultSection}>
      <div className={styles.title}>
        <h5>Your Result</h5>
      </div>
      <div>
        <div className={styles.circle}>
          <span className={styles.circleTitle}>76</span>
          <span className={styles.circleCaption}> of 100</span>
        </div>
      </div>
      <div className={styles.footerResult}>
        <span className={styles.greatText}>Great</span>
        <p className={styles.paragraphFooter}>
          You scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </section>
  );
}

export default ResultCard;
