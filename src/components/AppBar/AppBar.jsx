import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import styles from './AppBar.module.css';

const AppBar = () => {
  // const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={styles.header}>
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
      <UserMenu />
      <AuthNav />
    </header>
  );
};

export default AppBar;
