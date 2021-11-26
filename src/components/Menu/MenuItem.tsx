import React from 'react';
import { Link } from 'react-router-dom';
import { DARK_YELLOW } from '../../colors';

interface Props {
  link: string;
  title: string;

  id: number;
  selected: number;
  setSelected: (item: number) => void;
}

const MenuItem: React.FC<Props> = ({
  link,
  title,
  id,
  selected,
  setSelected,
}) => {
  return (
    <Link
      to={link}
      className="w-32 border-r border-gray-300 justify-center items-center flex"
      onClick={() => setSelected(id)}
    >
      <span
        className="text-xl font-bold"
        style={{ color: id === selected ? DARK_YELLOW : '' }}
      >
        {title}
      </span>
    </Link>
  );
};

export default MenuItem;
