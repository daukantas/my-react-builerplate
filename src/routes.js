
import React from 'react';
import { Route, Link } from 'react-router';

import App from './containers/App';
import MainSection from './components/MainSection';

export default (
    <Route path="/" component={App}>
      <Route path="parent" component={MainSection}>
      </Route>
    </Route>
)
