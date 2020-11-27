import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { RouteData } from '../../routes/constants';

interface LinkListerProps {
  title: string;
  routeBase: string;
  routeData: RouteData;
}

const LinkLister: FC<LinkListerProps> = ({ title, routeBase, routeData }) => {
  const { order, data } = routeData;

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {order.map(item => {
          const { name, route } = data[item];
          return (
            <li key={route}>
              <Link to={`/${routeBase}/${route}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LinkLister;
