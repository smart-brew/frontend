import React from 'react';

const SplitPage: React.FC = ({ children }) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="splitpage flex flex-row h-full min-h-full max-h-full">
      <div className="main h-full w-2/3">{left}</div>
      <div className="sidebar h-full w-1/3 border-l border-gray-300">
        {right}
      </div>
    </div>
  );
};

export default SplitPage;
