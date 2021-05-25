import React from 'react';

import { REACT_ROUTES, REDUX_ROUTES } from '../../routes/constants';
import LinkLister from './LinkLister';

import styles from './styles.module.css';

const TableOfContent = () => {
  return (
    <div className={styles.container}>
      <h1>Table Of Content</h1>

      <LinkLister title="React" routeBase="react" routeData={REACT_ROUTES} />
      <LinkLister title="Redux" routeBase="redux" routeData={REDUX_ROUTES} />
    </div>
  );
};

export default TableOfContent;
