import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

import { RiLogoutBoxLine, RiMenu3Fill } from 'react-icons/ri';
import { FaRegCircleUser } from 'react-icons/fa6';
import { TiContacts } from 'react-icons/ti';

import { logout } from '../../redux/auth/operations';

import styles from './BurgerMenu.module.css';

const BurgerMenu = () => {
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    const handleResize = () => {
      setWidth(window.innerWidth);
      if (width > 767 && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isOpen, width]);

  return (
    <div className={styles.burger_menu_wrap} ref={menuRef}>
      <button className={styles.burger_btn} type="button" onClick={toggleMenu}>
        <RiMenu3Fill className={styles.burger_ico} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.burger_menu}
            initial={{
              opacity: 0,
              scaleY: 0,
              transformOrigin: 'top',
            }}
            animate={{
              opacity: 1,
              scaleY: 1,
              x: -10,
              y: 5,
              transformOrigin: 'top',
            }}
            exit={{
              opacity: 0,
              scaleY: 0,
              x: 0,
              y: 0,
              transformOrigin: 'top',
            }}
            transition={{ duration: 0.3 }}
          >
            <Link
              className={styles.menu_item}
              to={'/contacts'}
              onClick={toggleMenu}
            >
              <TiContacts className={styles.menu_item_ico} />
              Contacts
            </Link>

            <Link
              className={styles.menu_item}
              to={'/account'}
              onClick={toggleMenu}
            >
              <FaRegCircleUser className={styles.menu_item_ico} />
              My account
            </Link>

            <button
              className={styles.menu_item}
              type="button"
              onClick={() => dispatch(logout())}
            >
              <RiLogoutBoxLine className={styles.menu_item_ico} />
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BurgerMenu;
