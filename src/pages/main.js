import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Projects from './Projects';

export default class Main extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/portfolio" component={Home} />
                <Route exact path="/projects" component={Projects} />
            </Switch>
        )
    }
}