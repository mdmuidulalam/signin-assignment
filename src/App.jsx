import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.less";
import CreateAccount from "./components/createAccount/createAccount.jsx";
import Signin from "./components/signin/signin.jsx";

function App() {
  return (
      <div id="app">
        <Router>
          <Switch>
            <Route path={`/createAccount`}>
              <CreateAccount />
            </Route>
            <Route path={`/signin`}>
              <Signin />
            </Route>
            <Route path={`/`}>
              <Signin />
            </Route>
          </Switch>
        </Router>
      </div>
  );
}

export default App;
