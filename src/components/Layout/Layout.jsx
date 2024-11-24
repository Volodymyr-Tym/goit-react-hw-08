import { Suspense } from 'react';

import AppBar from '../AppBar/AppBar';
import Loader from '../Loader/Loader';

import styles from './Layout.module.css';

export const Layout = ({ children }) => {
  return (
    <div className={styles.wrap}>
      <AppBar />
      <Suspense fallback={<Loader />}>{children}</Suspense>
    </div>
  );
};
