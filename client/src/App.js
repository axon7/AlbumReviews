import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import BrowseAlbums from './containers/BrowseAlbums';
import Login from './components/authorization/Login';
import Register from './components/authorization/Register';
import store from './store';
import SearchAlbums from './containers/SearchAlbums';
import Alert from './components/layout/Alert';
import { setAuthToken } from './utils/setAuthToken';
import { loadUser } from './actions/authentication';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Alert />

        <Switch>
          <Route exact path="/" component={BrowseAlbums} />
          <Route exact path="/search" component={SearchAlbums} />

          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
