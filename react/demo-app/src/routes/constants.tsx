import { ComponentType } from 'react';

// react
import Playground from '../features/_playground';
import CustomHook from '../features/customHook';
import CustomHookLocalStorage from '../features/customHookLocalStorage';
import SetStateTriggerTime from '../features/setStateTriggerTime';

// redux
import Counter from '../features/counter/Counter';

export interface RouteData {
  order: string[];
  data: {
    [propName: string]: {
      name: string;
      route: string;
      comp: ComponentType<{}>;
    };
  };
}

export const REACT_ROUTES: RouteData = {
  order: [
    'playground',
    'customHook',
    'customHookLocalStorage',
    'setStateTriggerTime',
  ],
  data: {
    playground: {
      name: 'Playground',
      route: 'playground',
      comp: Playground,
    },
    customHook: {
      name: 'Custom Hook',
      route: 'custom-hook',
      comp: CustomHook,
    },
    customHookLocalStorage: {
      name: 'Custom Hook Local Storage Util',
      route: 'custom-hook-local-storage',
      comp: CustomHookLocalStorage,
    },
    setStateTriggerTime: {
      name: 'set State Trigger Time',
      route: 'set-state-trigger-time',
      comp: SetStateTriggerTime,
    },
  },
};

export const REDUX_ROUTES: RouteData = {
  order: ['counter'],
  data: {
    counter: {
      name: 'Redux Counter',
      route: 'counter',
      comp: Counter,
    },
  },
};
