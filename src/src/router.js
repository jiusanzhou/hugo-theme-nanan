import React from 'react';
import { Router, Route, Switch } from 'dva/router';
// import IndexPage from './routes/IndexPage';
import HomePage from './routes/HomePage';
import ContentPage from './routes/ContentPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/p/:slug" exact component={ContentPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
