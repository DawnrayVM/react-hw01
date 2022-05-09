import styles from './Statistics.module.css';

const StatisticsItem = ({ stats }) =>
  stats.map(({ id, label, percentage }) => (
    <li className="" key={id}>
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}</span>
    </li>
  ));

export default StatisticsItem;
