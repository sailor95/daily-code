import React from 'react';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import CustomHook from '../features/customHook';
import SetStateTriggerTime from '../features/setStateTriggerTime';

const ReactRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/customHook`} component={CustomHook} />
      <Route
        path={`${path}/setStateTriggerTime`}
        component={SetStateTriggerTime}
      />
    </Switch>
  );
};

export default ReactRoutes;
