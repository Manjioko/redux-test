import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from '../Home/index.jsx';
import Level0 from '../Level0/index.jsx';


const getRouter  = () => (
        <Router>
            <div>
                <ul>
                    <li><Link to="/">首页</Link></li>
                    <li><Link to="/level0">Page1</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/level0" component={Level0}/>
                </Switch>
            </div>
        </Router>
)

export default getRouter;
