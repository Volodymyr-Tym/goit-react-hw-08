import { useSelector } from 'react-redux';
import Error from '../../components/Error/Error';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';

import { selectUserDataIsError } from '../../redux/auth/selectors';

import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const isError = useSelector(selectUserDataIsError);

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>
        Please fill in this form to create an account.
      </h2>

      <RegistrationForm />

      {isError && <Error error={isError} />}
    </div>
  );
};

export default RegistrationPage;
