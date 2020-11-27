import React, { useEffect, useState } from 'react';

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
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
};

export default Counter;
