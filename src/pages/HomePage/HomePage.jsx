import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.main_title}>
        Wellcome to{' '}
        <span className={styles.accent}>
          Your Private Electronic Phone book{' '}
        </span>
        application!
      </h1>

      <p className={styles.descr}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        Exercitationem, incidunt. A molestias ad illum reiciendis fugiat quo
        quos qui accusantium tenetur, asperiores iusto cum, molestiae laborum
        eveniet consequuntur nobis! Magni repellat nostrum consequuntur in
        nobis. Voluptas, ullam, delectus incidunt cumque inventore, vero
        necessitatibus optio vitae in distinctio possimus quo quae!
      </p>
    </div>
  );
};

export default HomePage;
