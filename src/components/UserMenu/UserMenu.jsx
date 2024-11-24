import styles from './UserMenu.module.css';

const UserMenu = () => {
  return (
    <div>
      <p className={styles.username}>Welcome, {'user.name'}</p>
      <button
        type="button"
        // onClick={() => dispatch(logOut())}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
