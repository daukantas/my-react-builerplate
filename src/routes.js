
import React from 'react';
import { Route, Redirect, Link } from 'react-router';

import App from './containers/App';
import Other from './containers/Other';
import Home from './containers/Home';

export default (
    <Route path="/" component={App}>
        <Route path="home" component={Home} />
        <Route path="other" component={Other} />
    </Route>
)







