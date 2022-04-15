import React from 'react';
import { useLocation } from 'react-router-dom';
import Logo from './Logo';

import MenuItem from './MenuItem';
import Off from './Off';

export const MENU_HEIGHT = 70;

type MenuItem = {
  link: string;
  title: string;
};

type Props = {
  menus: MenuItem[];

  /** @default false */
  logo?: boolean;

  /** @default false */
  off?: boolean;

  /**
   *  If thrue, the menu will be highlighted when pathname is exactly the same as the link.
   *  If false, the menu will be highlighted when pathname starts with the link.
   *  @default false
   */
  matchPathnameExact?: boolean;
};

const Menu: React.FC<Props> = ({
  menus,
  logo = false,
  off = false,
  matchPathnameExact = false,
}) => {
  const location = useLocation();

  return (
    <div
      className="container flex flex-row w-screen max-w-full border-b border-gray-300"
      style={{ height: MENU_HEIGHT }}
    >
      {logo && <Logo />}

      {menus.map((menu) => (
        <MenuItem
          key={menu.title}
          link={menu.link}
          title={menu.title}
          selected={location.pathname}
          matchPathnameExact={matchPathnameExact}
        />
      ))}

      {off && <Off />}
    </div>
  );
};

export default Menu;
