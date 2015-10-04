import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';

@Radium
export default class Home extends Component {
    render () {
        return (
            <div>
                Honey, I'm home!
            </div>
        );
    }
}

const styles = styler``