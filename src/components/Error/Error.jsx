import styles from './Error.module.css';

const Error = ({ error, login = null }) => {
  const handleCloseClick = event => {
    event.target.parentNode.style.visibility = 'hidden';
  };

  return (
    <div className={styles.wrap}>
      <p className={styles.title}>Oooops something went wrong...</p>

      <p className={styles.message}>
        {' '}
        Reason: <span>{error}</span>
      </p>

      <p className={styles.message}>Please check details and try again</p>

      {login && (
        <p className={styles.message}>
          To log in to your personal account, you need to{' '}
          <a className={styles.link} href="/register">
            register new account
          </a>
        </p>
      )}

      <button className={styles.close} type="button" onClick={handleCloseClick}>
        X
      </button>
    </div>
  );
};

export default Error;
