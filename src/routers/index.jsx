import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from '../components/Loading';
import routes from './routes';
const lazyLoad = view => lazy(() => import(`../views/${view}/index`));

const componentLoading = Component => props => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
);

export default () => (
  <BrowserRouter>
    <Switch>
      {routes.map(route => (
        <Route
          path={route.path}
          exact={route.exact}
          component={componentLoading(lazyLoad(route.name))}
          key={route.name}
        />
      ))}
    </Switch>
  </BrowserRouter>
);
