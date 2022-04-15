import React from 'react';
import BrewList from '../brew/BrewList';
import { MENU_HEIGHT } from '../menu/MenuContainer';

interface Props {
  onSelectBrewId: (brewId: number) => void;
}

const HistorySidebar: React.FC<Props> = ({ onSelectBrewId }) => {
  return (
    <div
      className="context h-full overflow-auto pb-2"
      style={{ maxHeight: `calc(100vh - ${MENU_HEIGHT}px)` }}
    >
      <div className="text-center text-2xl font-bold p-8">Brewings</div>
      <BrewList onSelectBrewId={onSelectBrewId} />
    </div>
  );
};

export default HistorySidebar;
