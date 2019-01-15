// Core
import React, { Component } from 'react';

// Components
import {  Nav, Spinner, Catcher, PostAdd } from '../components';

export default class AddPost extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <PostAdd />
            </Catcher>
        );
    }
}
