import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';

import styles from './style.module.scss';

// Problem 1: How many times does the 1st button trigger render? (ans: 1)
// Problem 2: How many times does the 2nd button trigger render? (ans: 2)
// Problem 3: We can use the 'unstable_batchedUpdates' Hook to make native Web API getting merged

/**
/* Notes: 
/* React's synthetic event will merge all the setState calls,
/* on the other hand, React cannot merge the native Web API event listener callback
 */

export default class SetStateTriggerTime extends React.Component {
  state = {
    count: 0,
  };

  componentDidMount() {
    this._btn.addEventListener('click', this.onClick, false);
    this._btn_two.addEventListener('click', this.onClickTwo, false);
  }

  componentWillUnmount() {
    this._btn.removeEventListener('click', this.onClick, false);
    this._btn_two.removeEventListener('click', this.onClickTwo, false);
  }

  onClick = event => {
    this.increase();
    this.increase();
  };

  onClickTwo = event => {
    unstable_batchedUpdates(() => {
      this.increase();
      this.increase();
    });
  };

  increase = () => {
    this.setState(preState => ({
      count: preState.count + 1,
    }));
  };

  setRef = btn => {
    this._btn = btn;
  };

  setRefTwo = btn => {
    this._btn_two = btn;
  };

  render() {
    console.log(`render`);

    return (
      <div className={styles.container}>
        <div className={styles.row}>{this.state.count}</div>
        <div className={styles.row}>
          onclick: <button onClick={this.onClick}>count+1</button>
        </div>
        <div className={styles.row}>
          addEventListener 1: <button ref={this.setRef}>count+1</button>
        </div>
        <div className={styles.row}>
          addEventListener 2: <button ref={this.setRefTwo}>count+1</button>
        </div>
      </div>
    );
  }
}
