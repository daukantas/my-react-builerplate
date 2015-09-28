
import React from 'react';
import { Route, Link } from 'react-router';

import App from './containers/App';
import MainSection from './components/MainSection';

import { Component }  from 'react';

class Koko extends Component {
    render () {
        return (
            <div>
            1d
            </div>
        );
    }
}

export default (
    <Route path="/" component={App}>
        <Route path="bob" component={Koko} />
        <Route path="kkk" component={Koko} />
    </Route>
)







