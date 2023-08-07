import GetStartedButton from '../Helpers/GetStartedButton';
import styles from './index.module.css';

function Boost() {
  return (
    <section className={styles.boostSection}>
      <div className={styles.bgBlack}></div>
      <div className={styles.contentContainer}>
        <h1>Boost your links today</h1>
        <GetStartedButton />
      </div>
    </section>
  );
}

export default Boost;
