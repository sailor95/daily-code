import React, { FC } from 'react';
import { Route, useRouteMatch } from 'react-router-dom';

import { RouteData } from './constants';

interface RouterListerProps {
  base?: string;
  content: RouteData;
}

const RouterLister: FC<RouterListerProps> = ({ content }) => {
  const { data, order } = content;
  const { path } = useRouteMatch();

  return (
    <>
      {order.map(item => {
        const { route, comp } = data[item];
        return <Route key={route} path={`${path}/${route}`} component={comp} />;
      })}
    </>
  );
};

export default RouterLister;
