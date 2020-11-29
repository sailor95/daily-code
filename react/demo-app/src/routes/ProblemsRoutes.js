import React from 'react';
import { Switch, Route } from 'react-router-dom';

import BackHomeButton from '../features/ui-kits/BackHomeButton';
import { REACT_ROUTES, REDUX_ROUTES } from './constants';
import RouterLister from './RouterLister';

const ProblemsRoutes = () => {
  return (
    <>
      <Switch>
        <Route
          path={`/react`}
          render={() => <RouterLister content={REACT_ROUTES} />}
        />

        <Route
          path={`/redux`}
          render={() => <RouterLister content={REDUX_ROUTES} />}
        />
      </Switch>

      <BackHomeButton />
    </>
  );
};

export default ProblemsRoutes;
