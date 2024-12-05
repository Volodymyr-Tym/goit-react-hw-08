import { Link, NavLink } from 'react-router-dom';
import clsx from 'clsx';

import styles from './StyledLink.module.css';

const StyledLink = ({ to, children, useNavLink = true }) => {
  const Component = useNavLink ? NavLink : Link;

  const linkClass = ({ isActive }) =>
    clsx(styles.link, isActive && styles.active_link);

  return (
    <Component to={to} className={linkClass}>
      {children}
    </Component>
  );
};

export default StyledLink;
