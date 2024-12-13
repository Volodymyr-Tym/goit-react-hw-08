import { useDispatch, useSelector } from 'react-redux';
import { FaRegCircleUser } from 'react-icons/fa6';
import { RiLogoutBoxLine } from 'react-icons/ri';
import { RiMenu3Fill } from 'react-icons/ri';
import { TiContacts } from 'react-icons/ti';

import { selectUserData } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

import { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import { Link } from 'react-router-dom';
import {
  menuBackdropStyles,
  menuBurgerStyles,
  menuItemStyles,
  menuWrapStyles,
} from '../../utils/customStyles';
import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUserData);

  // ----------------------------
  const [anchorEl, setAnchorEl] = useState(null);
  const open = anchorEl;

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // ----------------------------

  return (
    <div className={styles.wrap}>
      <div className={styles.menu}>
        <div className={styles.greeting}>
          <p>
            Welcome, <span className={styles.name}>{user.name}</span>
          </p>

          <FaRegCircleUser className={styles.ico} />
        </div>

        <button
          className={styles.btn}
          type="button"
          onClick={() => dispatch(logout())}
        >
          Logout
          <RiLogoutBoxLine />
        </button>
      </div>

      <div className={styles.mob_menu}>
        <Button
          id="burger-menu-button"
          aria-controls={open ? 'burger-menu' : null}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : null}
          onClick={handleClick}
          sx={menuBurgerStyles}
        >
          <RiMenu3Fill className={styles.ico_burger} />
        </Button>

        <Menu
          id="burger-menu"
          aria-labelledby="burger-menu-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
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
          <MenuItem onClick={handleClose} sx={menuItemStyles}>
            <Link to={'/contacts'} className={styles.burger_link}>
              <TiContacts />
              Contacts
            </Link>{' '}
          </MenuItem>

          <MenuItem onClick={handleClose} sx={menuItemStyles} divider={true}>
            <FaRegCircleUser />
            My account
          </MenuItem>

          <MenuItem onClick={handleClose} sx={menuItemStyles}>
            <RiLogoutBoxLine />
            Logout
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
};

export default UserMenu;
