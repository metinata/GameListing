import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import store from "./store";
import Layouts from "./layouts";
import {views} from "./routes";
import * as serviceWorker from "./serviceWorker";

import "./assets/styles/styles.scss";

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

ReactDOM.render(
    <Provider store={store()}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Layouts.Default(views.HomeView)}/>
                <Route exact path="/:groupProperty/:groupPropertyValue" component={Layouts.Default(views.HomeView)}/>
                <Redirect from="*" to="/"/>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById("root")
);
