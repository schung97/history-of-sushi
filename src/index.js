import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducer } from 'redux';
import reduxThunk from 'redux-thunk';
import App from './components/App';
import './css/root.css';


const reducer = (state = [], action) => {
  switch (action.type) {
    case "SAY_HI":
      return [...state, 'hi']
    case "GET_CATEGORIES_SUCCESS":
      let newState = [...state, action.categories]
      console.log(newState)
      return newState
    default:
      return state
  }
}


const store = createStore(reducer, applyMiddleware(reduxThunk))


console.log('before', store.getState())
store.dispatch({type: 'SAY_HI'})
store.dispatch((dispatch) =>  {
  fetch('http://localhost:3001/api/v1/categories')
    .then(r=>r.json())
    .then(categories=>{
      dispatch({
        type: 'GET_CATEGORIES_SUCCESS', categories: categories
      })
      dispatch({type: 'SAY_HI'})
    })
})
console.log('after', store.getState())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

//to do soon
// import React from 'react';
// import ReactDOM from 'react-dom';

// import { Provider } from 'react-redux';
//
// import App from './App';
// import configureStore from './configureStore';
//
// const store = configureStore();
//
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// );
