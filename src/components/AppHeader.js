import React, { Component, PropTypes } from 'react';
import Radium from 'radium';

import Link from './Link';

import styler from 'react-styling';

@Radium
export default class AppHeader extends Component {
    render () {
        const links = [
            { to : '/home', text : 'home' },
            { to : '/other', text : 'other' }
        ];

        return (
            <header style={styles.header}>
                {links.map( link => (
                    <Link key={link.to} style={styles.link} activeStyle={styles.link.active} to={link.to}>
                        {link.text}
                    </Link>
                ))} 
            </header>
        )
    }
}

// this syntax documated here: https://github.com/halt-hammerzeit/react-styling
// it posible to just use css or scss too.

const styles = styler`
    header
        border: 1px solid
        padding: 20px 20px

    link
        text-decoration: none
        color: #000
        display: inline-block
        background : gold
        padding: 20px
        margin: 10px
        
        &:hover
            background : red

        active
            font-size: 20px
`