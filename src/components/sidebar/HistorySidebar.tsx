import React from 'react';
import { BrewSimple } from '../../types/BrewType';
import BrewList from '../brew/BrewList';
import { MENU_HEIGHT } from '../menu/MenuContainer';

interface Props {
  setBrewId: (brewId: number) => void;
  brewId: number;
  brews: BrewSimple[];
}

const HistorySidebar: React.FC<Props> = ({ setBrewId, brewId, brews }) => {
  return (
    <div
      className="context h-full overflow-auto pb-2"
      style={{ maxHeight: `calc(100vh - ${MENU_HEIGHT}px)` }}
    >
      <div className="text-center text-2xl font-bold p-8">Brewings</div>
      <BrewList brews={brews} callback={setBrewId} current={brewId} />
    </div>
  );
};

export default HistorySidebar;
