import { useSelector } from 'react-redux';
import Container from '../../components/Container/Container';
import Error from '../../components/Error/Error';
import Loader from '../../components/Loader/Loader';
import styles from './MyAccountPage.module.css';

import {
  selectUserData,
  selectUserDataIsError,
  selectUserDataIsLoading,
} from '../../redux/auth/selectors';

const MyAccountPage = () => {
  const user = useSelector(selectUserData);
  const isLoading = useSelector(selectUserDataIsLoading);
  const isError = useSelector(selectUserDataIsError);

  return (
    <Container className={styles.account_container}>
      <h2 className={styles.title}>Welcome to your personal page!</h2>

      <div className={styles.info}>
        <div className={styles.cur_user}>
          <span>{user.name.slice(0, 1)}</span>
        </div>

        <ul className={styles.info_list}>
          <li className={styles.info_item}>
            <p className={styles.info_name}>Name:</p>
            <p className={styles.data}>{user.name}</p>
          </li>

          <li className={styles.info_item}>
            <p className={styles.info_name}>Email:</p>
            <p className={styles.data}>{user.email}</p>
          </li>
        </ul>
      </div>

      {isLoading && <Loader />}
      {isError && <Error error={isError} />}
    </Container>
  );
};

export default MyAccountPage;
