import React from 'react';
import { Link } from 'react-router-dom';
import Ingredients from '../components/RecipeMaking/ingredients/Ingredients';

import Button from '../components/shared/Button';
import ConfirmPopup from '../Popups/ConfirmPopup';
import IngredientType from '../types/RecipeData/IngredientType';
import { openPopup } from '../Popups/PopupFunctions';

interface Props {
  saveRecipe: () => void;
  toIngredients: () => void;

  ingredients: IngredientType[];
  //   ingredients:IngredientType[],recipeName:string,addedBlocks:BlockType[]
  recipeName: string;
}

const CreateInstructionsSidebar: React.FC<Props> = ({
  saveRecipe,
  toIngredients,
  ingredients,
  recipeName,
}: Props) => {
  const popupRef = React.useRef<HTMLDivElement>(null);
  const popupRefSave = React.useRef<HTMLDivElement>(null);

  return (
    <React.StrictMode>
      <div className="context h-2/3">
        <div className="pl-2 font-bold p-2 mx-7 my-1 content-center shadow rounded-3xl flex flex-row items-center justify-start bg-yellow-200">
          Recipe name: {recipeName}
        </div>
        <Ingredients ingredients={ingredients} />
      </div>
      <div className="buttons text-center flex flex-col mx-10">
        <Button title="Save recipe" onClick={() => openPopup(popupRefSave)} />
        <div>
          <div className="modal-bg" ref={popupRefSave} style={{ margin: 0 }}>
            <ConfirmPopup
              pathPage="/"
              popupName="Do you want to save the recipe?"
              popupDescription="By pressing Confirm the recipe will be saved"
              popupRef={popupRefSave}
              setUseFunction={() => saveRecipe()}
            />
          </div>
        </div>
        <Button
          secondary
          title="Previous step"
          onClick={() => toIngredients()}
        />

        <Button
          cancel
          className="w-full"
          title="Cancel"
          onClick={() => openPopup(popupRef)}
        />
        <div>
          <div className="modal-bg" ref={popupRef} style={{ margin: 0 }}>
            <ConfirmPopup
              pathPage="/recipe"
              popupName="Do you want to stop making new recipe?"
              popupDescription="By leaving this page, all the changes will be lost"
              popupRef={popupRef}
            />
          </div>
        </div>
      </div>
    </React.StrictMode>
  );
};

export default CreateInstructionsSidebar;
