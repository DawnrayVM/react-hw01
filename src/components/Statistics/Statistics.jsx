import StatisticsItem from './Statistics-item';

import styles from './Statistics.module.css';

const Statistics = ({ title, data }) => (
  <section className={styles.container}>
    <h2 className={styles.title}>{title}</h2>
    <ul className={styles.statList}>
      <StatisticsItem stats={data} />
    </ul>
  </section>
);
export default Statistics;
