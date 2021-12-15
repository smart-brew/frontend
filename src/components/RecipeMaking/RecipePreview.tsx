import React from 'react';

import RecipeType from '../../types/RecipeData/RecipeType';
import Instructions from '../recipe/Instructions';
import Ingredients from './ingredients/Ingredients';
import InstructionBlock from '../recipe/Blocks/InstructionBlock';
import { DataContext } from '../../contexts/dataContext';
import { usePopup } from '../../contexts/popupContext';
import { confirmManualInstruction } from '../../api/brew';

interface Props {
  recipe: RecipeType | null;
}

// TODO: tento recipe preview sa moze pouzit aj na OverviewPage, kde je vidno cely recept, a tento isty tam moze byt, len size bude ten mensi
const RecipePreview: React.FC<Props> = ({ recipe }) => {
  const systemStatus = React.useContext(DataContext);
  const popup = usePopup();

  const manualCallback = (instrId: number, param: string): void => {
    popup?.open({
      title: 'To continue, press Confirm that this step was taken',
      description: param,
      onConfirm: () => confirmManualInstruction(recipe?.id || 0, instrId),
    });
  };

  return recipe ? (
    <div className="flex flex-col">
      <span className="text-center text-2xl font-bold pt-8 pb-8">
        {recipe?.name}
      </span>

      {systemStatus?.brewStatus !== 'IN_PROGRESS' && (
        <Ingredients ingredients={recipe.Ingredients} />
      )}

      <Instructions
        instructions={recipe.Instructions}
        manualCallback={manualCallback}
      />
    </div>
  ) : (
    <span>Please select a recipe</span>
  );
};

export default RecipePreview;
