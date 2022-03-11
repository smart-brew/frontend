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
    <div className="flex flex-row">
      <div className="w-1/12 px-8 text-right">{ingredient.amount}</div>
      <div className="w-1/12 px-4 text-left italic">{ingredient.units}</div>
      <div className="w-max px-4 text-left">{ingredient.name}</div>
      {showUnloader && <div className="w-auto px-4 text-left">nasypnik </div>}
    </div>
  );
};
