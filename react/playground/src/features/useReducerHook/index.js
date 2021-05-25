import React, { useCallback, useRef, memo, useReducer } from 'react';

import styles from './styles.module.scss';

// Ref: https://medium.com/@as790726/%E5%A6%82%E4%BD%95%E9%8C%AF%E8%AA%A4%E5%9C%B0%E4%BD%BF%E7%94%A8-react-hooks-usecallback-%E4%BE%86%E4%BF%9D%E5%AD%98%E7%9B%B8%E5%90%8C%E7%9A%84-function-instance-7744984bb0a6

const Button = memo(({ handleClick, text }) => {
  const refCount = useRef(0);
  return (
    <button onClick={handleClick}>
      {`${text}`}
      <span className={styles.renderCount}>
        self render count {refCount.current++}
      </span>
    </button>
  );
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREASE_A':
      return {
        ...state,
        numA: state.numA + 1,
      };
    case 'DECREASE_A':
      return {
        ...state,
        numA: state.numA - 1,
      };
    case 'INCREASE_B':
      return {
        ...state,
        numB: state.numB + 1,
      };
    case 'DECREASE_B':
      return {
        ...state,
        numB: state.numB - 1,
      };
    case 'A_PLUS_B':
      return {
        ...state,
        result: state.numA + state.numB,
      };
    case 'A_MINUS_B':
      return {
        ...state,
        result: state.numA - state.numB,
      };
    default:
      return state;
  }
};

const UseReducerTemplate = () => {
  const [{ numA, numB, result }, dispatch] = useReducer(reducer, {
    numA: 0,
    numB: 0,
    result: null,
  });
  const handlePlusAClick = useCallback(() => dispatch({ type: 'INCREASE_A' }), [
    dispatch,
  ]);
  const handleMinusAClick = useCallback(
    () => dispatch({ type: 'DECREASE_A' }),
    [dispatch]
  );
  const handlePlusBClick = useCallback(() => dispatch({ type: 'INCREASE_B' }), [
    dispatch,
  ]);
  const handleMinusBClick = useCallback(
    () => dispatch({ type: 'DECREASE_B' }),
    [dispatch]
  );
  const handleAPlusB = useCallback(() => dispatch({ type: 'A_PLUS_B' }), [
    dispatch,
  ]);
  const handleAMinusB = useCallback(() => dispatch({ type: 'A_MINUS_B' }), [
    dispatch,
  ]);
  return (
    <div className={styles.container}>
      <div className={styles.num}>NumA: {numA}</div>
      <Button text={'+'} handleClick={handlePlusAClick} />
      <Button text={'-'} handleClick={handleMinusAClick} />
      <div className={styles.num}>NumB: {numB}</div>
      <Button text={'+'} handleClick={handlePlusBClick} />
      <Button text={'-'} handleClick={handleMinusBClick} />
      <div className={styles.num}>Result: {result}</div>
      <Button text={'A + B'} handleClick={handleAPlusB} />
      <Button text={'A - B'} handleClick={handleAMinusB} />
    </div>
  );
};

export default UseReducerTemplate;
