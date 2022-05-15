import styles from './Feedback.module.css';

const FeedbackStats = ({ stats, title }) => (
  <div>
    <h2 className={styles.feedbackStatsTitle}>{title}</h2>
    {Object.entries(stats).map(stat => (
      <span key={stat[0]} className={styles.feedbackStatsItem}>
        {stat[0].slice(0, 1).toUpperCase().concat(stat[0].slice(1))}:
        {stat[0] === 'positive' ? ` ${stat[1]} %` : ` ${stat[1]}`}
      </span>
    ))}
  </div>
);
export default FeedbackStats;
