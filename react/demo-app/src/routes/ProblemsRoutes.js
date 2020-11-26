import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BackHomeButton from '../features/ui-utils/BackHomeButton';
import ReactRoutes from './ReactRoutes';
import ReduxRoutes from './ReduxRoutes';

const ProblemsRoutes = () => {
  return (
    <>
      <Switch>
        <Route path="/react" component={ReactRoutes} />
        <Route path="/redux" component={ReduxRoutes} />
      </Switch>

      <BackHomeButton />
    </>
  );
};

export default ProblemsRoutes;
