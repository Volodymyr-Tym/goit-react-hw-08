import { useSelector } from 'react-redux';

import Container from '../../components/Container/Container';
import LoginForm from '../../components/LoginForm/LoginForm';
import Error from '../../components/Error/Error';

import { selectUserDataIsError } from '../../redux/auth/selectors';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  const isError = useSelector(selectUserDataIsError);
  return (
    <Container className={styles.login_contaiter}>
      <h2 className={styles.title}>Login</h2>

      <LoginForm />

      {isError && <Error error={isError} />}
    </Container>
  );
};

export default LoginPage;
