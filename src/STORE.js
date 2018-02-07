import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import AuthReducer from './_public/AuthReducer';

const reducers = combineReducers({
  AuthReducer,
});

export default createStore(reducers, applyMiddleware(reduxThunk))
