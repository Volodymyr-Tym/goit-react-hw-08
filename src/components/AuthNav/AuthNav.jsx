import { NavLink } from 'react-router-dom';
import { RiLoginBoxLine } from 'react-icons/ri';
import { FiUserPlus } from 'react-icons/fi';
import clsx from 'clsx';

import styles from './AuthNav.module.css';

const AuthNav = () => {
  const linkClass = ({ isActive }) =>
    clsx(styles.link, isActive && styles.active_link);

  return (
    <div className={styles.wrap}>
      <NavLink className={linkClass} to="/login">
        Login
        <RiLoginBoxLine />
      </NavLink>

      <NavLink className={linkClass} to="/register">
        Sign Up
        <FiUserPlus />
      </NavLink>
    </div>
  );
};

export default AuthNav;
