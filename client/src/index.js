import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';

import App from './components/App';
import reducers from './reducers';
import axios from 'axios';
window.axios = axios;

//created a redux store and using the provider tag we hooked it up with our react side
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDom.render(
   //provider tag react component that knows how to read changes from redux store
   //the provider will rerender all the components in App
   <Provider store={store}><App /></Provider>,
   document.querySelector('#root')
);

