import React from 'react';

import { MarketingApp } from './components/MarketingApp';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';

export const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <MarketingApp />
      </div>
    </Router>
  );
};
