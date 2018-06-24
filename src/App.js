import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import DevTools from './DevTools'

import './App.css';
// Styles
// CoreUI Icons Set
import '@coreui/icons/css/coreui-icons.min.css';
// Import Flag Icons Set
import 'flag-icon-css/css/flag-icon.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';
// Import Main styles for this application
import './scss/style.css'

// Containers
import { DefaultLayout } from './containers';

// import { renderRoutes } from 'react-router-config';

const App = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Switch>
          <Route path="/" name="Home" component={DefaultLayout} />
        </Switch>
        <DevTools />
      </div>
    </HashRouter>
  </Provider>
)

export default App;
