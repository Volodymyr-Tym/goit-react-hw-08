import { useDispatch, useSelector } from 'react-redux';

import StyledBtn from '../StyledBtn/StyledBtn';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import { selectUserData } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

import styles from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();

  const user = useSelector(selectUserData);

  return (
    <div className={styles.menu_wrap}>
      <div className={styles.user_menu}>
        <div className={styles.greeting}>
          <p>
            Welcome, <span className={styles.name}>{user.name}</span>
          </p>

          <StyledBtn
            addClassName={styles.logout_btn}
            onClick={() => dispatch(logout())}
          >
            Logout
          </StyledBtn>
        </div>
      </div>

      <div className={styles.burger_menu}>
        <BurgerMenu />
      </div>
    </div>
  );
};

export default UserMenu;
