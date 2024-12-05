import { useDispatch, useSelector } from 'react-redux';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RiLogoutBoxLine } from 'react-icons/ri';

import { selectUserData } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUserData);
  return (
    <div className={styles.wrap}>
      <div className={styles.greeting}>
        <p>
          Welcome, <span className={styles.name}>{user.name}</span>
        </p>

        <FaRegCircleUser className={styles.ico} />
      </div>

      <button
        className={styles.btn}
        type="button"
        onClick={() => dispatch(logout())}
      >
        Logout
        <RiLogoutBoxLine />
      </button>
    </div>
  );
};

export default UserMenu;
