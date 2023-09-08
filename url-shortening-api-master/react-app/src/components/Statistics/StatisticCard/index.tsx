import styles from './index.module.css';
import { IconType } from 'react-icons';

interface Props {
  icon: IconType;
  title: string;
  description: string;
}

function StatisticCard({ icon: Icon, title, description }: Props) {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.iconContainer}>
        <Icon size={35} />
      </div>
      <div className={styles.textContainer}>
        <span className={styles.title}>{title}</span>
        <p className={styles.paragraph}>{description}</p>
      </div>
    </div>
  );
}

export default StatisticCard;
