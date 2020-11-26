import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

const BackHomeButton = () => {
  return (
    <div className={styles['back-home']}>
      <Link className={styles.button} to="/">
        Back Home
      </Link>
    </div>
  );
};

export default BackHomeButton;
