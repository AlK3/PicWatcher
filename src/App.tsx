import React from 'react';
import { HomePage } from './pages/HomePage';
import { ImagesPage } from './pages/ImagesPage';
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route
} from 'react-router-dom';

export const App: React.FC = () => {

  return (
  <Router>
    <Switch>
      <Route path='/home' component={HomePage} />
      <Route path='/images' component={ImagesPage} />
      <Redirect to='/home' />
    </Switch>
  </Router>
  );
}