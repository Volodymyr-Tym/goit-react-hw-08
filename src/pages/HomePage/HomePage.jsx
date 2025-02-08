import Container from '../../components/Container/Container';

import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <Container className={styles.home_container}>
      <img
        className={styles.logo}
        src="/images/logo_128px.png"
        alt="Your Private Electronic Phone book logo"
      />

      <h1 className={styles.main_title}>
        Wellcome to{' '}
        <span className={styles.accent}>
          Your Private Electronic Phone book{' '}
        </span>
        application!
      </h1>

      <div className={styles.descr}>
        <p>
          Our app offers you an additional private contact list that you can
          access from any device.
        </p>

        <p className={styles.p2}>Safe and simple!</p>
      </div>
    </Container>
  );
};

export default HomePage;
