import React, { useState } from 'react';

import usePreviousState from './usePreviousState';

import styles from './styles.module.scss';

const UsePreviousState = () => {
  const [count, setCount] = useState(0);
  const prevCount = usePreviousState(count);

  return (
    <div className={styles.container}>
      <div className={styles.prev}>Prev Count: {prevCount}</div>
      <div className={styles.current}>Count: {count}</div>
      <button onClick={() => setCount(count + 1)}>Count++</button>
    </div>
  );
};

export default UsePreviousState;
