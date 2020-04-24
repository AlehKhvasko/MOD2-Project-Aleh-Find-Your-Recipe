import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom';



export default function Router() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path='/' component={App}/>
                    <Route path='/recipe:id' component={Top10} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
