import { useSelector } from 'react-redux';

import Container from '../../components/Container/Container';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import Error from '../../components/Error/Error';

import { selectUserDataIsError } from '../../redux/auth/selectors';

import styles from './RegistrationPage.module.css';

const RegistrationPage = () => {
  const isError = useSelector(selectUserDataIsError);

  return (
    <Container className={styles.register_container}>
      <h2 className={styles.title}>Create account</h2>

      <RegistrationForm />

      {isError && <Error error={isError} />}
    </Container>
  );
};

export default RegistrationPage;
