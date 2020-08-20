import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Survey from './views/survey';
import Clubs from './views/clubs';

export const App =
( 
    <BrowserRouter>
        <Switch>
            <Route path="/">
                <Home />
            </Route>
            <Route path="/survey">
                <Survey />
            </Route>
            <Route path="/clubs">
                <Clubs />
            </Route>
        </Switch>
    </BrowserRouter>
);