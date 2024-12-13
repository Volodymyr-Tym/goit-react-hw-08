import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import Container from '../Container/Container';

import { selectUserDataIsLoggedIn } from '../../redux/auth/selectors';

import { clsx } from 'clsx';
import styles from './AppBar.module.css';
import { Link } from 'react-router-dom';

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
      <Container className={styles.header_container}>
        <div className={styles.menu}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>

        <div className={styles.mob_menu}>
          <Link className={styles.link} to={'/'}>
            <img
              className={styles.logo}
              src="../../../logo_128px.png"
              alt="Logo"
            />
          </Link>

          {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </div>
      </Container>
    </header>
  );
};

export default AppBar;
