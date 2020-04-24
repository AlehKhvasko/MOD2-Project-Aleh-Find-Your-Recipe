import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Top from './Top';
import App from '../App';



export default function Router() {
            return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}></Route>
                    <Route path='/top' component={Top} />
                </Switch>
            </BrowserRouter>
);
}