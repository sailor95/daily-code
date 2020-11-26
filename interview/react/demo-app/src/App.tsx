import React from 'react';
import { Route, Switch } from 'react-router-dom';

import TableOfContent from './features/tableOfContent';
import CustomHook from './features/customHook';
import { Counter } from './features/counter/Counter';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={TableOfContent} />
      {/* React */}
      <Route path="/react/customHook" component={CustomHook} />
      {/* Redux */}
      <Route path="/redux/counter" component={Counter} />
    </Switch>
  );
}

export default App;
