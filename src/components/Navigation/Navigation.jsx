import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import StyledLink from '../StyledLink/StyledLink';

import { selectUserDataIsLoggedIn } from '../../redux/auth/selectors';

import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <nav>
      <Link className={styles.mob_home_link} to={'/'}>
        <img className={styles.logo} src="/images/logo_128px.png" alt="Logo" />
      </Link>

      <div className={styles.menu_wrap}>
        <StyledLink to={'/'}>Home</StyledLink>

        {isLoggedIn && <StyledLink to={'/contacts'}>Contacts</StyledLink>}

        {isLoggedIn && <StyledLink to={'/account'}>My account</StyledLink>}
      </div>
    </nav>
  );
};

export default Navigation;
