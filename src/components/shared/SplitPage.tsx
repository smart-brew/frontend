import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { MENU_HEIGHT } from '../menu/MenuContainer';

type Props = {
  back?: {
    text: string;
    to: string;
  };
};

const SplitPage: React.FC<Props> = ({ children, back }) => {
  const [left, right] = React.Children.toArray(children);

  return (
    <div className="splitpage flex flex-row h-full min-h-full max-h-full">
      <div
        className="main w-2/3 overflow-auto relative"
        style={{ height: `calc(100vh - ${MENU_HEIGHT}px)` }}
      >
        {back && (
          <Link
            className="absolute left-4 top-3 flex items-center gap-2"
            to={back.to}
          >
            <FontAwesomeIcon icon={faArrowLeft} size="2x" />
            <span className="font-bold text-2xl">{back.text}</span>
          </Link>
        )}

        {left}
      </div>
      <div className="sidebar w-1/3 border-l border-gray-300">{right}</div>
    </div>
  );
};

export default SplitPage;
