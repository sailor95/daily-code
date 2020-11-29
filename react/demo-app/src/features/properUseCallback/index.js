import React, { memo, useCallback, useRef, useState } from 'react';

import styles from '../ui-utils/styles-template.module.scss';

// Ref: https://medium.com/@as790726/%E5%A6%82%E4%BD%95%E9%8C%AF%E8%AA%A4%E5%9C%B0%E4%BD%BF%E7%94%A8-react-hooks-usecallback-%E4%BE%86%E4%BF%9D%E5%AD%98%E7%9B%B8%E5%90%8C%E7%9A%84-function-instance-7744984bb0a6

// Button should only render once
const Button = memo(({ handleClick }) => {
  const refCount = useRef(0);
  console.log('Render Button');
  return (
    <button onClick={handleClick}>
      Button render count: {refCount.current++}
    </button>
  );
});

const Template = () => {
  const [isOn, setIsOn] = useState(false);
  const handleClick = useCallback(() => setIsOn(prev => !prev), []);
  console.log('Render Template');
  return (
    <div className={styles.container}>
      <h1>{isOn ? 'On' : 'Off'}</h1>
      <Button handleClick={handleClick} />
    </div>
  );
};

export default Template;
