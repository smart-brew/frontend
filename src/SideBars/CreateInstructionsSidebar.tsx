import React from 'react';
import { Link } from 'react-router-dom';
import Ingredients from '../components/RecipeMaking/ingredients/Ingredients';

import Button from '../components/shared/Button';
import IngredientType from '../types/RecipeData/IngredientType';

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
  return (
    <React.StrictMode>
      <div className="context h-2/3">
        <div className="pl-2 font-bold p-2 mx-7 my-1 content-center shadow rounded-3xl flex flex-row items-center justify-start bg-yellow-200">
          Recipe name: {recipeName}
        </div>
        <Ingredients ingredients={ingredients} />
      </div>
      <div className="buttons text-center flex flex-col mx-10">
        <Button title="Save recipe" onClick={() => saveRecipe()} />
        <Button
          secondary
          title="Previous step"
          onClick={() => toIngredients()}
        />
        <Link to="/recipe">
          <Button cancel className="w-full" title="Cancel" />
        </Link>
      </div>
    </React.StrictMode>
  );
};

export default CreateInstructionsSidebar;
