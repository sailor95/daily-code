/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';

import styles from '../../ui-kits/styles-template.module.scss';

const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let value;

    try {
      value = JSON.parse(
        window.localStorage.getItem(key) || String(defaultValue)
      );
    } catch (err) {
      value = defaultValue;
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, state);
  }, [state]);

  return [state, setState];
};

const Counter = () => {
  const [count, setCount] = useLocalStorageState('my-app-count', 0);

  return (
    <div className={styles.container}>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      <button style={{ marginLeft: '1rem' }} onClick={() => setCount(0)}>
        Clear
      </button>
    </div>
  );
};

export default Counter;
