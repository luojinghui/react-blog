/**
 * Created Date: 2017/12/21
 * Author: luojinghui
 */
import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import { login } from './reducer';

export default combineReducers({
  routing,
  login
});
