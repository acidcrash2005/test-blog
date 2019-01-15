// Core
import React, { Component } from 'react';

// Components
import {  Nav, Spinner, Catcher, Post } from '../components';

export default class PostPage extends Component {
    render () {
        return (
            <Catcher>
                <Spinner />
                <Nav />
                <Post />
            </Catcher>
        );
    }
}
