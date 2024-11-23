import { useSelector } from 'react-redux';
import { error } from '../../redux/selectors';

import styles from './Error.module.css';

const Error = () => {
  const isError = useSelector(error);

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
