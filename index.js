import React, { Component } from 'react';
import { render } from 'react-dom';
 import Welcome from './components/welcome'
 import {Provider} from 'react-redux'
 import {createStore} from 'redux'
 import reducers from './reducers'
import './style.css';

render(
  <Provider store={createStore(reducers)}>
 <Welcome />
  </Provider>
  , document.getElementById('root'));
