import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Loading from '../components/Loading';

const lazyLoad = view => lazy(() => import(`../views/${view}/index`));

const componentLoading = Component => props => (
  <Suspense fallback={<Loading />}>
    <Component {...props} />
  </Suspense>
);

export default () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={componentLoading(lazyLoad('Home'))} exact />
      <Route
        path='/login'
        component={componentLoading(lazyLoad('Login'))}
        exact
      />
      <Route
        path='*'
        exact
        component={componentLoading(lazyLoad('NotFound'))}
      />
    </Switch>
  </BrowserRouter>
);
