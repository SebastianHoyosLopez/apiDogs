import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Api from "./components/Api";
import Info from "./components/Info";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar/>
        <Switch>
          <Route component={Api} path="/api" exact/>
          <Route component={Info} path="/" exact/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
