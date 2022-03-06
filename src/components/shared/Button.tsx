import React from 'react';

interface Props {
  className?: string;
  title: string;
  secondary?: boolean;
  neutral?: boolean;
  warn?: boolean;
  danger?: boolean;
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<Props> = ({
  className,
  title,
  secondary,
  neutral,
  warn,
  danger,
  onClick,
  disabled,
}) => {
  function getColor(): string {
    if (neutral) return 'text-gray-600 bg-transparent border-gray-600';
    if (secondary) return 'text-green-600 bg-transparent border-green-600';
    if (warn) return 'text-red-500 bg-transparent border-red-500';
    if (danger) return 'text-white bg-red-500 border-red-500';
    return 'text-white bg-green-600 border-green-600';
  }

  return (
    <button
      className={`max-w-xs border-4 text-xl py-1 px-5 my-1 shadow rounded-full font-bold ${getColor()} ${className}`}
      disabled={disabled}
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
  neutral: undefined,
  danger: undefined,
  warn: undefined,
  className: undefined,
  disabled: false,
};

export default Button;
