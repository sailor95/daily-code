import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import Counter from '../features/counter/Counter';

const ReduxRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/counter`} component={Counter} />
    </Switch>
  );
};

export default ReduxRoutes;
