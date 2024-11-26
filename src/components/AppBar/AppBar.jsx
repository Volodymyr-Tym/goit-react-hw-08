import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import { selectUserDataIsLoggedIn } from '../../redux/auth/selectors';

import styles from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};

export default AppBar;
