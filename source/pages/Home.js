// Core
import React, { Component } from 'react';

// Components
import {  Nav, Spinner, Catcher, Posts } from '../components';

export default class Home extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <Posts />
            </Catcher>
        );
    }
}
