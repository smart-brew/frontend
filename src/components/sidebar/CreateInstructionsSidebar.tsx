import React from 'react';
import { useHistory } from 'react-router-dom';
import { usePopup } from '../../contexts/popupContext';

import Ingredients from '../recipe/ingredients/Ingredients';
import Button from '../shared/Button';
import IngredientType from '../../types/RecipeData/IngredientType';

interface Props {
  saveRecipe: () => void;
  isSavable: boolean;
  toIngredients: () => void;
  isBlockNameEmpty: () => boolean;

  ingredients: IngredientType[];
  //   ingredients:IngredientType[],recipeName:string,addedBlocks:BlockType[]
  recipeName: string;
}

const CreateInstructionsSidebar: React.FC<Props> = ({
  saveRecipe,
  toIngredients,
  ingredients,
  recipeName,
  isSavable,
  isBlockNameEmpty,
}: Props) => {
  const popup = usePopup();
  const history = useHistory();

  return (
    <React.StrictMode>
      <div className="context h-2/3">
        <div className="pl-2 font-bold p-2 mx-7 my-1 content-center shadow rounded-3xl flex flex-row items-center justify-start bg-yellow-200">
          Recipe name: {recipeName}
        </div>
        <Ingredients ingredients={ingredients} />
      </div>
      <div className="buttons text-center flex flex-col mx-10 items-center">
        <Button
          title="Save recipe"
          disabled={!isSavable || !isBlockNameEmpty()}
          onClick={() =>
            popup?.open({
              title: 'Do you want to save the recipe?',
              description: 'By pressing Confirm the recipe will be saved',
              onConfirm: () => saveRecipe(),
            })
          }
          className="w-full"
        />

        <Button
          secondary
          title="Previous step"
          onClick={() => toIngredients()}
          className="w-full"
        />

        <Button
          neutral
          className="w-full"
          title="Cancel"
          onClick={() =>
            popup?.open({
              title: 'Do you want to stop making new recipe?',
              description: 'By leaving this page, all the changes will be lost',
              onConfirm: () => history.push('/recipe'),
            })
          }
        />
      </div>
    </React.StrictMode>
  );
};

export default CreateInstructionsSidebar;
