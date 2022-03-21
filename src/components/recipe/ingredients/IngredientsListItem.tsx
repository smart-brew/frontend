import React from 'react';
import IngredientType from '../../../types/RecipeData/IngredientType';

interface IngredientItemsProps {
  ingredient: IngredientType;
  showUnloader: boolean;
}

export const IngredientsListItem: React.FC<IngredientItemsProps> = ({
  ingredient,
  showUnloader,
}: IngredientItemsProps) => {
  return (
    <div className="flex flex-row text-xl justify-between mr-6">
      <div className="flex flex-row space-x-5">
        <div className="w-1/12 px-8 text-right">{ingredient.amount}</div>
        <div className="w-1/12 px-4 text-left italic">{ingredient.units}</div>
        <div className="w-10/12 px-4 text-left">{ingredient.name}</div>
      </div>
      {showUnloader && <div className="w-auto px-4 text-left">nasypnik </div>}
    </div>
  );
};
