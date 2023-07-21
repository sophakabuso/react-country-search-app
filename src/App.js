import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/countries/:countryCode" component={CountryDetail} />
      </Switch>
    </Router>
  );
}

export default App;
