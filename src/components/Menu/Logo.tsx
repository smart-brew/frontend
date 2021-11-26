import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo-big.svg';

interface Props {
  onClick: () => void;
}

const Logo: React.FC<Props> = ({ onClick }) => {
  return (
    <Link
      to="/"
      className="w-32 border-r border-gray-300 justify-center items-center flex"
      onClick={onClick}
    >
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
