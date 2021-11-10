import React from 'react';

import { MarketingApp } from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { createGenerateClassName, StylesProvider } from '@material-ui/styles';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export const App = () => {
  return (
    <Router>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          <Header />
          <MarketingApp />
        </div>
      </StylesProvider>
    </Router>
  );
};
