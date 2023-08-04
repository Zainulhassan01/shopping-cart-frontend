import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import allReducers from './reducers/allReducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(allReducers);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));