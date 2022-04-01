import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';

import MenuItem from './MenuItem';
import Off from './Off';

export const MENU_HEIGHT = 70;

const menus = [
  { link: '/', title: 'Overview' },
  { link: '/recipe', title: 'Recipes' },
  { link: '/history', title: 'History' },
  { link: '/tester', title: 'Tester' },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <div
      className="container flex flex-row w-screen max-w-full border-b border-gray-300"
      style={{ height: MENU_HEIGHT }}
    >
      <Logo />

      {menus.map((menu) => (
        <MenuItem
          key={menu.title}
          link={menu.link}
          title={menu.title}
          selected={location.pathname}
        />
      ))}

      <Off />
    </div>
  );
};

export default Menu;
