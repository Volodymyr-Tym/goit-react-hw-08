import LoginForm from '../../components/LoginForm/LoginForm';

import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>Please enter your details to log in.</h2>

      <LoginForm />
    </div>
  );
};

export default LoginPage;
