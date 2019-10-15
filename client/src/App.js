import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import BrowseAlbums from "./containers/BrowseAlbums";
import Login from "./components/authorization/Login";
import Register from "./components/authorization/Register";
import { Provider } from "react-redux";
import store from "./store";
import SearchAlbums from "./containers/SearchAlbums";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={BrowseAlbums} />
          <Route exact path='/search' component={SearchAlbums} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/login' component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
