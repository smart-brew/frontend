import React from 'react';

interface Props {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button
      className="select-button"
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
