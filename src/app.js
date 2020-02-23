import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import LandingPage from './page/landingPage';
import Dashboard from './page/dashboard';
import Navbar from './components/navbar';

export default class App extends Component {
    render() {
        return (
            <div>
                {/* <BrowserRouter>
                    <Switch>
                        <Route exact path="/landing-page" component={LandingPage} />
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/" render={() => <Redirect to="/landing-page" />}></Route>
                        <Redirect from="*" to="/" />
                    </Switch>
                </BrowserRouter> */}
                <Navbar/>
            </div>
        )
    }
}
