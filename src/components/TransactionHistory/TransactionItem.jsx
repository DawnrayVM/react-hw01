import styles from './TransactionHistory.module.css';

const TransactionItem = ({ transactions }) =>
  transactions.map(({ id, type, amount, currency }) => (
    <tr key={id} className={styles.threadValues}>
      <td className={styles.threadValue}>
        {type.charAt(0).toUpperCase() + type.slice(1)}
      </td>
      <td className={styles.threadValue}>{amount}</td>
      <td className={styles.threadValue}>{currency.toUpperCase()}</td>
    </tr>
  ));

export default TransactionItem;
