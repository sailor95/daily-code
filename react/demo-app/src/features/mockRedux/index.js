import React from 'react';

import { Provider, createStore, combineReducers } from './createStore';
import counterReducer from './counterReducer';
import Counter from './Counter';

import styles from '../ui-kits/styles-template.module.scss';

const rootReducer = combineReducers({
  counter: counterReducer,
});
const store = createStore(rootReducer);

const MockRedux = () => {
  return (
    <Provider store={store}>
      <div className={styles.container}>
        <h1>Mock Redux</h1>
        <Counter />
      </div>
    </Provider>
  );
};

export default MockRedux;
