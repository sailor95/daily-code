import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import TableOfContent from '../features/tableOfContent';
import ProblemsRoutes from '../routes/ProblemsRoutes';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={TableOfContent} />
        <Route component={ProblemsRoutes} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
