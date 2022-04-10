import React from 'react';
import { MENU_HEIGHT } from '../menu/MenuContainer';
import Button from '../shared/Button';

type Props = {
  handleSelectRecipe: (recipeId: number) => void;
};

export const HistorySidebar: React.FC<Props> = ({ handleSelectRecipe }) => {
  return (
    <div
      className="context h-full overflow-auto pb-2"
      style={{ maxHeight: `calc(100vh - ${MENU_HEIGHT}px)` }}
    >
      TODO Sidebar <br />
      <Button title="Click" onClick={() => handleSelectRecipe(48)} />
    </div>
  );
};
