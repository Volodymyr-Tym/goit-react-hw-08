import { useDispatch, useSelector } from 'react-redux';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { RiMenu3Fill } from 'react-icons/ri';
import { TiContacts } from 'react-icons/ti';

import { selectUserData } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

import { useEffect, useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  menuBackdropStyles,
  menuBurgerStyles,
  menuItemStyles,
  menuWrapStyles,
} from '../../utils/customStyles';
import styles from './UserMenu.module.css';
import StyledBtn from '../StyledBtn/StyledBtn';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUserData);

  const [width, setWidth] = useState(window.innerWidth);

  const [anchorElBurger, setAnchorElBurger] = useState(null);

  const handleOpenBurgerMenu = event => {
    setAnchorElBurger(event.currentTarget);
  };

  const handleCloseBurgerMenu = () => {
    setAnchorElBurger(null);
  };

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    if (width > 767) {
      if (anchorElBurger) {
        setAnchorElBurger(null);
      }
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [width, anchorElBurger]);

  return (
    <div>
      <div className={styles.user_menu}>
        <div className={styles.greeting}>
          <p>
            Welcome, <span className={styles.name}>{user.name}</span>
          </p>

          <StyledBtn onClick={() => dispatch(logout())}>Logout</StyledBtn>
        </div>
      </div>

      <div className={styles.mob_menu}>
        <Button
          id="burger-menu-button"
          aria-controls={anchorElBurger ? 'burger-menu' : null}
          aria-hidden="false"
          aria-haspopup="true"
          aria-expanded={anchorElBurger ? 'true' : null}
          onClick={handleOpenBurgerMenu}
          sx={menuBurgerStyles}
        >
          <RiMenu3Fill className={styles.ico_burger} />
        </Button>

        <Menu
          id="burger-menu"
          className={styles.my_menu}
          aria-labelledby="burger-menu-button"
          anchorEl={anchorElBurger}
          open={Boolean(anchorElBurger)}
          onClose={handleCloseBurgerMenu}
          anchorOrigin={{
            vertical: 40,
            horizontal: -120 + 35,
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          slotProps={{
            paper: {
              sx: menuWrapStyles,
            },
            root: {
              BackdropProps: {
                sx: menuBackdropStyles,
              },
            },
          }}
        >
          <MenuItem onClick={handleCloseBurgerMenu} sx={menuItemStyles}>
            <Link to={'/contacts'} className={styles.burger_link}>
              <TiContacts />
              Contacts
            </Link>{' '}
          </MenuItem>

          <MenuItem
            onClick={handleCloseBurgerMenu}
            sx={menuItemStyles}
            divider={true}
          >
            <Link to={'/account'} className={styles.burger_link}>
              <FaRegCircleUser />
              My account
            </Link>{' '}
          </MenuItem>

          <MenuItem onClick={() => dispatch(logout())} sx={menuItemStyles}>
            <RiLogoutBoxLine />
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default UserMenu;
