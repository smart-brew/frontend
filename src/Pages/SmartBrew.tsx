import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../components/Menu/MenuContainer';
import Pages from './Pages';

const SmartBrew: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-full w-full max-h-screen">
        <Menu />
        <Pages />
      </div>
    </Router>
  );
};

export default SmartBrew;
