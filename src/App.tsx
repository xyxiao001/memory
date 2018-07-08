import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Home/index';
import User from './User/index';



export default class App extends React.Component {
  public render() {
    return (
      <Router>
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route exact={true} path="/User" component={User} />
        </div>
      </Router>
    );
  }
}