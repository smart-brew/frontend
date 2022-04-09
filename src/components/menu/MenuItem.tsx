import React from 'react';
import { Link } from 'react-router-dom';
import { DARK_YELLOW } from '../../colors';

interface Props {
  link: string;
  title: string;
  selected: string;
  matchPathnameExact: boolean;
}

const MenuItem: React.FC<Props> = ({
  link,
  title,
  selected,
  matchPathnameExact,
}) => {
  const [isSelected, setIsSeleted] = React.useState(false);

  React.useEffect(() => {
    if (link === '/') {
      setIsSeleted(link === selected);
    } else {
      setIsSeleted(
        matchPathnameExact ? selected === link : selected.startsWith(link)
      );
    }
  }, [selected, link, matchPathnameExact]);

  return (
    <Link
      to={link}
      className="w-32 border-r border-gray-300 justify-center items-center flex"
    >
      <span
        className="text-xl font-bold"
        style={{ color: isSelected ? DARK_YELLOW : '' }}
      >
        {title}
      </span>
    </Link>
  );
};

export default MenuItem;
