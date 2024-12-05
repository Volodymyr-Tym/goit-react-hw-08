import { useSelector } from 'react-redux';

import StyledLink from '../StyledLink/StyledLink';
import { selectUserDataIsLoggedIn } from '../../redux/auth/selectors';

import styles from './Navigation.module.css';

const Navigation = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <nav className={styles.wrap}>
      <StyledLink to={'/'}>Home</StyledLink>

      {isLoggedIn && <StyledLink to={'/contacts'}>Contacts</StyledLink>}
    </nav>
  );
};

export default Navigation;
