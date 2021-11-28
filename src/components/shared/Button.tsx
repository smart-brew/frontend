import React from 'react';

interface Props {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button
      className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full m-auto w-52 mb-2"
      type="button"
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {title}
    </button>
  );
};

Button.defaultProps = {
  onClick: undefined,
};

export default Button;
