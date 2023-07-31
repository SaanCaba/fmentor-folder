import SummaryItem from '../SummaryCards';
import styles from './index.module.css';

import { BsLightning } from 'react-icons/bs';
import { BiBrain } from 'react-icons/bi';
import { SiTheconversation } from 'react-icons/si';
import { AiOutlineEye } from 'react-icons/ai';

function SummaryCard() {
  return (
    <section className={styles.summarySection}>
      <SummaryLayout>
        <div>
          <span>Summary</span>
        </div>
        <div className={styles.summaryItems}>
          <SummaryItem
            bgColor="#fadede"
            title="Reaction"
            mainColor="#ff5757"
            result={80}
            icon={<BsLightning />}
          />
          <SummaryItem
            bgColor="#fff4e0"
            mainColor="#ffb01f"
            title="Memory"
            result={92}
            icon={<BiBrain />}
          />
          <SummaryItem
            bgColor="#e1faf4"
            mainColor="#00bd91"
            title="Verbal"
            result={61}
            icon={<SiTheconversation />}
          />
          <SummaryItem
            bgColor="#ebedfc"
            mainColor="#1125d4"
            title="Visual"
            result={90}
            icon={<AiOutlineEye />}
          />
        </div>
        <div className={styles.buttonContainer}>
          <button>Continue</button>
        </div>
      </SummaryLayout>
    </section>
  );
}

interface Props {
  children: React.ReactNode;
}

function SummaryLayout({ children }: Props) {
  return <div className={styles.summaryLayout}>{children}</div>;
}

export default SummaryCard;
