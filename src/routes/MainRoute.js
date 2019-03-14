import React from "react";
import { Route, Switch} from "react-router-dom";

import SignIn from '../pages/SignIn.js';
import Profile from '../pages/Profile.js';
// import Detailromance from '../App';
import romance from '../pages/romance.js';
import action from '../pages/action.js';
import fiction from '../pages/fiction.js';
import comedy from '../pages/comedy.js';
import Home from '../pages/Home.js';

const MainRoute = () => {
    return (
        <Switch>
            <Route exact path="/signin" component={SignIn} />}
            <Route exact path="/romance" component={romance} />
            <Route exact path="/action" component={action} />
            <Route exact path="/fiction" component={fiction} />
            <Route exact path="/comedy" component={comedy} />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={Profile} />
        </Switch>
    );
};

export default MainRoute;