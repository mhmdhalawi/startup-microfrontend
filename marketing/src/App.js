import React from 'react';

import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';

import Landing from './components/Landing';
import Pricing from './components/Pricing';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const App = () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router>
          <Switch>
            <Route exact path='/pricing'>
              <Pricing />
            </Route>
            <Route path='/'>
              <Landing />
            </Route>
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
