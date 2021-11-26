import React from 'react';
import Logo from './Logo';

import MenuItem from './MenuItem';
import Off from './Off';

export const MENU_HEIGHT = 70;

const menus = [
  { link: '/', title: 'Overview' },
  { link: '/recipe', title: 'Recipes' },
  { link: '/history', title: 'History' },
];

const Menu: React.FC = () => {
  const [selected, setSelected] = React.useState(0);

  return (
    <div
      className="container flex flex-row w-screen max-w-full border-b border-gray-300"
      style={{ height: MENU_HEIGHT }}
    >
      <Logo onClick={() => setSelected(0)} />

      {menus.map((menu, index) => (
        <MenuItem
          key={menu.title}
          link={menu.link}
          title={menu.title}
          id={index}
          selected={selected}
          setSelected={setSelected}
        />
      ))}

      <Off />
    </div>
  );
};

export default Menu;
