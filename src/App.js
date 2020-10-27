import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/home';
import './App.css';
import ShopPage from './pages/shop';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  )
}

export default App;
