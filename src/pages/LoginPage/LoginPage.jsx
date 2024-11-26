import { useSelector } from 'react-redux';

import Error from '../../components/Error/Error';
import LoginForm from '../../components/LoginForm/LoginForm';
import { selectUserDataIsError } from '../../redux/auth/selectors';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  const isError = useSelector(selectUserDataIsError);
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Please enter your details to log in.</h2>

      <LoginForm />

      {isError && <Error error={isError} />}
    </div>
  );
};

export default LoginPage;
