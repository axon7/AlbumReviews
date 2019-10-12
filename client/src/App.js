import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import NewReleases from "./containers/NewReleases";
import Login from './components/authorization/Login';
import Register from './components/authorization/Register';
function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={NewReleases} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
