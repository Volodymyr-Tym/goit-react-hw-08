import { useSelector } from 'react-redux';

import { selectIsError } from '../../redux/contacts/selectors';

import styles from './Error.module.css';

const Error = () => {
  const isError = useSelector(selectIsError);

  return (
    <div className={styles.wrap}>
      <p className={styles.title}>Oooops something went wrong...</p>
      <p className={styles.message}>
        {' '}
        Reason: <span>{isError}</span>
      </p>
    </div>
  );
};

export default Error;
