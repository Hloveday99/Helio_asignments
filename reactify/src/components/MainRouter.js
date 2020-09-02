import React from 'react'
import {BrowserRouter as Router, Switch, Route,} from 'react-router-dom'

import Home from './Home'
import Forgot from './Forgot'
import Login from './Login'
import Register from './Register'

export default function MainRouter () {

    return (
        <Router>
            <Switch>
                <Route path="/login"><Login></Login></Route>
                <Route path="/forgot"><Forgot></Forgot></Route>
                <Route path="/register"><Register></Register></Route>
                <Route path="/"><Home></Home></Route>
            </Switch>
        </Router>
    )
}