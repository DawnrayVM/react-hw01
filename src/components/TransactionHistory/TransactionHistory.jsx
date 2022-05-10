import TransactionItem from './TransactionItem';

import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.transactionTable}>
    <thead>
      <tr>
        <th className={styles.threadTitle}>Type</th>
        <th className={styles.threadTitle}>Amount</th>
        <th className={styles.threadTitle}>Currency</th>
      </tr>
    </thead>
    <tbody>
      <TransactionItem transactions={items} />
    </tbody>
  </table>
);

export default TransactionHistory;
