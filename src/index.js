import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise'
import {BrowserRouter, Route, Switch } from 'react-router-dom';

import App from './components/app';
import ForecastPage from './components/forecast_page';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
    <Switch>
      <Route path= '/forecast' component={ ForecastPage } />
      <Route path= '/' component={ App } /> 
    </Switch>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container-fluid'));
