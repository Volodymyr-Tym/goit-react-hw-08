import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.css';
import clsx from 'clsx';

const AuthNav = () => {
  const linkClass = ({ isActive }) =>
    clsx(styles.link, isActive && styles.active_link);

  return (
    <div className={styles.wrap}>
      <NavLink className={linkClass} to="/register">
        Register
      </NavLink>
      <NavLink className={linkClass} to="/login">
        Log In
      </NavLink>
    </div>
  );
};

export default AuthNav;
