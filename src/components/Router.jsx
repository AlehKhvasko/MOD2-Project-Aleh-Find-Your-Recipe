import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Top from './Top';
import App from '../App';
import Motivation from './Motivation';



export default function Router() {
            return (
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path='/top' component={Top} />
                    <Route path='/motivation' component={Motivation} />
                </Switch>
            </BrowserRouter>
);
}