/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';

import styles from './style.module.scss';

// Problem: Create a custom hook that auto add the counter

function useCounter(start) {
  const [counter, setCounter] = useState(start);

  const lastBase = useRef(null);

  useEffect(() => {
    if (lastBase.current !== start) {
      lastBase.current = start;
      setCounter(parseInt(start, 10));
    }

    const update = () => {
      setCounter(counter + 1);
    };

    const timer = setTimeout(() => {
      update();
    }, 1500);

    return () => {
      clearTimeout(timer);
    };
  }, [counter]);

  return counter;
}

const CustomHook = () => {
  const [counter, setCounter] = useState({ start: 1 });
  const [inputVal, setInputVal] = useState(1);

  const count = useCounter(counter.start);

  return (
    <div className={styles.container}>
      <div className={styles.row}>count {count}</div>
      <div className={styles.row}>
        starts from{` `}
        <input
          defaultValue={counter.start}
          type="number"
          onChange={e => setInputVal(e.target.value)}
        />
        <button
          style={{ marginLeft: '1em' }}
          onClick={() => setCounter({ start: inputVal })}
        >
          reset
        </button>
      </div>
    </div>
  );
};

export default CustomHook;
