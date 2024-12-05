import BtnTest from '../../components/BtnTest/BtnTest';
import styles from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <div className={styles.wrap}>
      <h2>Sorry... Page was not found.</h2>
      <BtnTest name="Go home" href="/" />
    </div>
  );
};

export default NotFoundPage;
