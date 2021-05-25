import React from 'react';

import { connect } from './createStore';
import { increment, decrement } from './counterReducer';

const Counter = ({ count, inc, dec }) => {
  return (
    <div>
      <h2>Counter</h2>
      <div>Counts: {count}</div>
      <button onClick={inc}>+1</button>
      <button onClick={dec}>-1</button>
    </div>
  );
};

const mapStateToProps = state => ({
  count: state.counter,
});

const mapDispatchToProps = dispatch => ({
  inc: () => dispatch(increment()),
  dec: () => dispatch(decrement()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
