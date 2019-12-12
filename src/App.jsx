import React from 'react';
import Routers from './routers';
import { Provider } from 'react-redux';
import { ToastProvider } from 'react-toast-notifications';
import store from './store';
import './App.scss';

export default () => (
  <Provider store={store}>
    <ToastProvider autoDismiss autoDismissTimeout={6000}>
      <Routers />
    </ToastProvider>
  </Provider>
);
