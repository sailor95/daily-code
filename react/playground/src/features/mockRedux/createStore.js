import React, { Component, createContext } from 'react';

// connect HOC
const connect = (mapStateToProps, mapDispatchToProps) => WrappedComponent => {
  class Connect extends Component {
    constructor(props) {
      super(props);

      this.state = props.store.getState();
    }

    componentDidMount() {
      this.props.store.subscribe(state => {
        this.setState(state);
      });
    }

    render() {
      const { store } = this.props;

      return (
        <WrappedComponent
          {...this.props}
          {...mapStateToProps(store.getState())}
          {...mapDispatchToProps(store.dispatch)}
        />
      );
    }
  }

  return props => (
    <ReduxContext.Consumer>
      {value => <Connect {...props} store={value} />}
    </ReduxContext.Consumer>
  );
};

// Provider
const ReduxContext = createContext('redux');

const Provider = ({ store, children }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

// combineReducers
const combineReducers = reducers => {
  const nextState = {};
  const reducerFunctions = {};
  const reducerKeys = Object.keys(reducers);

  reducerKeys.forEach(key => {
    if (typeof reducers[key] === 'function') {
      reducerFunctions[key] = reducers[key];
    }
  });

  const reducerFunctionsKeys = Object.keys(reducerFunctions);

  return (state = {}, action) => {
    reducerFunctionsKeys.forEach(reducerKey => {
      const reducer = reducerFunctions[reducerKey];
      nextState[reducerKey] = reducer(state[reducerKey], action);
    });

    return nextState;
  };
};

// createStore
const createStore = rootReducer => {
  let state;
  const listeners = [];

  const getState = () => state;

  const dispatch = action => {
    state = rootReducer(state, action);
    listeners.forEach(listener => listener(state));
  };

  const subscribe = listener => {
    listeners.push(listener);
  };

  dispatch({}); // Init state closure

  return { getState, dispatch, subscribe };
};

export { Provider, combineReducers, createStore, connect };
