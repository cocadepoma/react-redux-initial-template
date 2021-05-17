import React from "react";

import {
    BrowserRouter as Router,
    Switch, Route
} from "react-router-dom";
import { FirstScreen } from "../pages/FirstScreen";

export const AppRouter = () => {


    return (
        <Router basename='/' >
            <div>
                <Switch>

                    <Route exact path="/" component={FirstScreen} />
                    <Route path="*" component={FirstScreen} />

                </Switch>
            </div>
        </Router>
    )
}
