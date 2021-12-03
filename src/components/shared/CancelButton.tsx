import React from 'react';

interface Props {
  title: string;
  onClick?: () => void;
}

const CancelButton: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button
      className="cancel-button w-full"
      type="button"
      onClick={() => {
        if (onClick) onClick();
      }}
    >
      {title}
    </button>
  );
};

CancelButton.defaultProps = {
  onClick: undefined,
};

export default CancelButton;
