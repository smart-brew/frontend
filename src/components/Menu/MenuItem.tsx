import React from 'react';
import { Link } from 'react-router-dom';
import { DARK_YELLOW } from '../../colors';

interface Props {
  link: string;
  title: string;

  selected: string;
}

const MenuItem: React.FC<Props> = ({ link, title, selected }) => {
  return (
    <Link
      to={link}
      className="w-32 border-r border-gray-300 justify-center items-center flex"
    >
      <span
        className="text-xl font-bold"
        style={{ color: link === selected ? DARK_YELLOW : '' }}
      >
        {title}
      </span>
    </Link>
  );
};

export default MenuItem;
