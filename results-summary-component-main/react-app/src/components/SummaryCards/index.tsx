import styles from './index.module.css';

interface Props {
  icon: any;
  title: string;
  result: number;
  bgColor: string;
  mainColor: string;
}

function SummaryItem({ icon, title, result, bgColor, mainColor }: Props) {
  return (
    <div
      className={styles.summaryContainer}
      style={{ backgroundColor: bgColor, color: mainColor }}
    >
      <div className={styles.summaryContainerText}>
        {icon} <span>{title}</span>
      </div>
      <div className={styles.summaryContainerNumbers}>
        <span className={styles.resultText}>{result}</span>
        <span className={styles.bar}>/</span>
        <span className={styles.hundred}>100</span>
      </div>
    </div>
  );
}

export default SummaryItem;
