import styles from './Friendlist.module.css';

const FriendlistItem = ({ friends }) =>
  friends.map(friend => (
    <li className={styles.listItem}>
      {friend.isOnline ? (
        <span className={styles.status}></span>
      ) : (
        <span className={styles.status__no}></span>
      )}

      <img class="avatar" src={friend.avatar} alt="User avatar" width="48" />
      <p className={styles.name}>{friend.name}</p>
    </li>
  ));

export default FriendlistItem;
