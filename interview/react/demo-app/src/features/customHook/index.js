import React, { useState, useEffect, useRef } from 'react';

import BackHomeButton from '../ui-utils/BackHomeButton';

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

    setTimeout(() => {
      update();
    }, 1500);
    // eslint-disable-next-line
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
      <BackHomeButton />
    </div>
  );
};

export default CustomHook;
