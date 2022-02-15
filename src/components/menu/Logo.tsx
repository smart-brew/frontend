import React from 'react';

import { Link } from 'react-router-dom';
import logo from '../../assets/logo-big.svg';

const Logo: React.FC = () => {
  return (
    <Link
      to="/"
      className="w-32 border-r border-gray-300 justify-center items-center flex"
    >
      <img src={logo} alt="logo" />
    </Link>
  );
};

export default Logo;
