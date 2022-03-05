import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '@/containers/Home/Loadable';
import GeneralLayout from '@/layouts/GeneralLayout.jsx';

const Router = () => {
  return (
    <Switch>
      <Route path={['/', '/about']}>
        <GeneralLayout>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </GeneralLayout>
      </Route>
    </Switch>
  );
};

export default Router;
