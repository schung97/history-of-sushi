import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import Auth from './reducers/Authentication';
import User from './reducers/User';

const reducers = combineReducers({
  Auth,
  User
});

export default createStore(reducers, applyMiddleware(reduxThunk))
