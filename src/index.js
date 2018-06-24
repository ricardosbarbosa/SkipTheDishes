import './polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// disable ServiceWorker
// import registerServiceWorker from './registerServiceWorker';
import configureStore from './store/configureStore'

const store = configureStore()
console.log(store)
ReactDOM.render(<App store={store}/>, document.getElementById('root'));
// disable ServiceWorker
// registerServiceWorker();
