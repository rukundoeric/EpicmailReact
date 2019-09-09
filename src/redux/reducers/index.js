/* eslint-disable import/no-unresolved */
import { combineReducers } from 'redux';
import inbox from './inbox.reducer';

export default combineReducers({
  mail: inbox,
});
