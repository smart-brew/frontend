import React from 'react';

interface Props {
  className?: string;
  title: string;
  secondary?: boolean;
  cancel?: boolean;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({
  className,
  title,
  secondary,
  cancel,
  onClick,
}) => {
  function getColor(): string {
    if (cancel) return 'text-gray-600 bg-transparent border-gray-600';
    if (secondary) return 'text-green-600 bg-transparent border-green-600';
    return 'text-white bg-green-600 border-green-600';
  }

  return (
    <button
      className={`border-4 text-xl py-1 px-5 my-1 shadow rounded-full font-bold ${getColor()} ${className}`}
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
  secondary: undefined,
  cancel: undefined,
  className: undefined,
};

export default Button;
