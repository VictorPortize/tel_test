import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Login from '../pages/login'
import Home from '../pages/home'
import Edit from '../pages/edit'
import Register from '../pages/register'

export default function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Login} />
                <Route exact path='/home' component={Home} />
                <Route exact path='/edit' component={Edit} />
                <Route exact path='/register' component={Register} />
            </Switch>
        </BrowserRouter>
    )
}

