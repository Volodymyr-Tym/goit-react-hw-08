import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        Please fill in this form to create an account.
      </h2>

      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
