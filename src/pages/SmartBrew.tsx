import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import Menu from '../components/menu/MenuContainer';
import Pages from './Pages';

const menus = [
  { link: '/', title: 'Overview' },
  { link: '/recipe', title: 'Recipes' },
  { link: '/history', title: 'History' },
  { link: '/tester', title: 'Manual' },
];

const SmartBrew: React.FC = () => {
  return (
    <Router>
      <div className="flex flex-col h-full w-full max-h-screen">
        <Menu menus={menus} off logo />
        <Pages />
      </div>
    </Router>
  );
};

export default SmartBrew;
