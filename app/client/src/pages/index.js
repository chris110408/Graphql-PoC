import React, { Fragment } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom"
/** importing our pages */

import Main from './Main'
import {BasicLayout} from "../antd/layout";
import AddUser from './AddUser'
import ContextStorePage from "./ContextStore";
import RefetchQueries from "./RefetchQueries";
import Cache from "./Cache"

export default function Pages() {
  return (
    <Router primary={false} component={Fragment}>

        <Switch>
            <BasicLayout>
                <Route exact path="/" component={Main}/>
                <Route path="/state/context" component={ContextStorePage}/>
                <Route path="/state/refetchQueries" component={RefetchQueries}/>
                <Route path="/state/cache" component={Cache}/>
                <Route path="/Add/addUser" component={AddUser}/>
            </BasicLayout>
        </Switch>

    </Router>
  );
}
