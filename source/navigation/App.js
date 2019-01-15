// Core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

//Instruments
import {book} from './book';


// Pages
import { Home, Post, AddPost } from '../pages';

export default class App extends Component {
    render () {
        return (
            <Switch>
                <Route
                    exact
                    component = { Home }
                    path = { book.home }
                />
                <Route
                    exact
                    component = { Home }
                    path = { book.page }
                />
                <Route
                    exact
                    component = { Post }
                    path = { book.post }
                />
                <Route
                    exact
                    component = { AddPost }
                    path = { book.addPost }
                />
                <Redirect to = { book.home } />
            </Switch>
        );
    }
}
