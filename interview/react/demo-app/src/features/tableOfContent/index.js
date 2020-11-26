import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

const TableOfContent = () => {
  return (
    <div className={styles.container}>
      <h1>Table Of Content</h1>
      <h3>React</h3>
      <ul>
        <li>
          <Link to="/react/customHook">Custom Hook</Link>
        </li>
      </ul>
      <h3>Redux</h3>
      <ul>
        <li>
          <Link to="/redux/counter">Redux Counter</Link>
        </li>
      </ul>
    </div>
  );
};

export default TableOfContent;
