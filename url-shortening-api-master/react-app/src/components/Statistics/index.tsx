import StatisticCard from './StatisticCard';
import { BsGraphUpArrow, BsSpeedometer2, BsPencilFill } from 'react-icons/bs';

import styles from './index.module.css';
import Layout from '../Layout';
import Bar from './Bar';

const descriptions = {
  brand:
    "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence.",
  records:
    'Gain insights into who is clicking your links. Knowing when and where people engange with your content helps inform better decisions.',
  customizable:
    'Improve brand awareness and conternt discoverability through customizable links, supercharging audience engagement.',
};

function Statistics() {
  return (
    <section className={styles.statisticsSection}>
      <Layout>
        <div className={styles.statisticsTitle}>
          <h1>Advanced Statistics</h1>
          <p className={styles.paragraph}>
            <span>
              Track how your links are performing across the web with our
              advanced statistics dashboard
            </span>
          </p>
        </div>
        <div className={styles.cardsContainer}>
          <StatisticCard
            icon={BsGraphUpArrow}
            description={descriptions.brand}
            title="Brand Recognition"
          />
          <Bar />
          <StatisticCard
            icon={BsSpeedometer2}
            description={descriptions.records}
            title="Detailed Records"
          />
          <StatisticCard
            icon={BsPencilFill}
            description={descriptions.customizable}
            title="Fully Customizable"
          />
        </div>
      </Layout>
    </section>
  );
}

export default Statistics;
