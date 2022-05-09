import FriendlistItem from './FriendlistItem';
import styles from './Friendlist.module.css';

const Friendlist = ({ friends }) =>
  !!friends && (
    <ul className={styles.friendlist}>
      <FriendlistItem friends={friends} />
    </ul>
  );

export default Friendlist;
