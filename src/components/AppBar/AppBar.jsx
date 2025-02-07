import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { clsx } from 'clsx';

import Container from '../Container/Container';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import { selectUserDataIsLoggedIn } from '../../redux/auth/selectors';

import styles from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectUserDataIsLoggedIn);

  const [isScrolled, setIsScrolled] = useState(false);

  const headerClass = clsx(styles.header, isScrolled && styles.scrolled);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={headerClass}>
      <Container>
        <div className={styles.menu}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>

        <div className={styles.mob_menu}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
