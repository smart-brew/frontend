import React from 'react';
import { useHistory } from 'react-router-dom';
import { usePopup } from '../../contexts/popupContext';

import Ingredients from '../recipe/ingredients/Ingredients';
import Button from '../shared/Button';
import IngredientType from '../../types/RecipeData/IngredientType';
import { MENU_HEIGHT } from '../menu/MenuContainer';

interface Props {
  saveRecipe: (state: string) => void;
  editRecipe: () => void;
  checkBlockNameDoublesBoolean: () => boolean;
  checkEmptyBoxes: () => boolean;
  toIngredients: () => void;
  checkRecipeMakingConditions: () => boolean;
  ingredients: IngredientType[];
  recipeName: string;
  recipeId: number;
  recipeLocked: boolean;
}

const CreateInstructionsSidebar: React.FC<Props> = ({
  saveRecipe,
  editRecipe,
  toIngredients,
  ingredients,
  recipeName,
  checkBlockNameDoublesBoolean,
  checkEmptyBoxes,
  checkRecipeMakingConditions,
  recipeId,
  recipeLocked,
}: Props) => {
  const popup = usePopup();
  const history = useHistory();
  return (
    <React.StrictMode>
      <div
        className="context h-2/3 overflow-auto pb-2"
        style={{ maxHeight: `calc(66vh - ${MENU_HEIGHT}px)` }}
      >
        <div className="pl-2 p-2 mx-7 my-1 content-center shadow rounded-3xl flex flex-row items-center justify-start bg-yellow-200">
          <p className="font-bold truncate">Recipe name: {recipeName}</p>
        </div>
        <Ingredients ingredients={ingredients} />
      </div>

      <div className="buttons text-center flex flex-col mx-10 items-center">
        {recipeId === -1 && (
          <Button
            title="Save recipe"
            disabled={checkBlockNameDoublesBoolean() || checkEmptyBoxes()}
            onClick={() => {
              if (checkRecipeMakingConditions()) {
                popup?.open({
                  title: 'Do you want to save this recipe?',
                  description:
                    'By pressing Save recipe, the recipe will be saved to database',
                  buttonText: 'Save recipe',
                  onConfirm: () => saveRecipe('save'),
                });
              }
            }}
            className="w-full"
          />
        )}
        {recipeId > 0 && (
          <>
            <Button
              title="Save"
              disabled={
                checkBlockNameDoublesBoolean() ||
                checkEmptyBoxes() ||
                recipeLocked
              }
              onClick={() => {
                if (checkRecipeMakingConditions()) {
                  popup?.open({
                    title: 'Do you want to overwrite the recipe?',
                    description:
                      'This new version of the recipe will overwrite the old one',
                    buttonText: 'Overwrite recipe',
                    buttonType: 'warn',
                    onConfirm: () => editRecipe(),
                  });
                }
              }}
              className="w-full"
            />

            <Button
              title="Save as new"
              // disabled={checkRecipeState()checkEmptyBoxes() || checkBlockNameDoublesBoolean()}
              disabled={checkBlockNameDoublesBoolean() || checkEmptyBoxes()}
              onClick={() => {
                if (checkRecipeMakingConditions()) {
                  popup?.open({
                    title:
                      'Are you sure you want to save this recipe as a new one?',
                    description:
                      'By pressing Save as new, this recipe will be saved, while the old one will still exist',
                    buttonText: 'Save as new',
                    onConfirm: () => saveRecipe('edit'),
                  });
                }
              }}
              className="w-full"
            />
          </>
        )}
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
              title: 'Are you sure you want to stop creating this recipe?',
              description: 'By leaving this page, all the changes will be lost',
              buttonType: 'warn',
              buttonText: 'Leave',
              onConfirm: () => history.push('/recipe'),
            })
          }
        />
      </div>
    </React.StrictMode>
  );
};

export default CreateInstructionsSidebar;
