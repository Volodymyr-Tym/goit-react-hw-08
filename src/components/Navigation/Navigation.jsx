import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import styles from './Navigation.module.css';

const Navigation = () => {
  const linkClass = ({ isActive }) =>
    clsx(styles.link, isActive && styles.active_link);
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={styles.wrap}>
      <NavLink className={linkClass} to="/">
        Home
      </NavLink>
      {/* {isLoggedIn && ( */}
      <NavLink className={linkClass} to="/contacts">
        Contacts
      </NavLink>
      {/* )} */}
    </nav>
  );
};

export default Navigation;
