import React from 'react';
import { MENU_HEIGHT } from '../menu/MenuContainer';

const SplitPage: React.FC = ({ children }) => {
  const [left, right] = React.Children.toArray(children);
  return (
    <div className="splitpage flex flex-row h-full min-h-full max-h-full">
      <div
        className="main w-2/3 overflow-auto"
        style={{ height: `calc(100vh - ${MENU_HEIGHT}px)` }}
      >
        {left}
      </div>
      <div className="sidebar w-1/3 border-l border-gray-300">{right}</div>
    </div>
  );
};

export default SplitPage;
