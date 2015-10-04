import React, { Component } from 'react';
import Radium from 'radium';
import styler from 'react-styling';

@Radium
export default class Other extends Component {
    render () {
        return (
            <div style={styles.text}>
                Other, as something else entirely
            </div>
        );
    }
}

// this syntax documated here: https://github.com/halt-hammerzeit/react-styling
const styles = styler `
    .text {
        font-size: 30px;
    }
`