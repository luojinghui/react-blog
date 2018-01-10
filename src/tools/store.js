/**
 * Created Date: 2017/12/21
 * Author: luojinghui
 */

import {createStore, applyMiddleware} from 'redux'
import createHistory from 'history/createBrowserHistory'
import { routerMiddleware} from 'react-router-redux'
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import logger from 'redux-logger'

import reducers from '../reducers' // Or wherever you keep your reducers
const history = createHistory();
const middleware = routerMiddleware(history);

export const store = createStore(
  reducers,
  composeWithDevTools(
    applyMiddleware(logger, middleware, thunk)
  )
);