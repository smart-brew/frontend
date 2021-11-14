import React from 'react';
import IngredientType from '../../../types/RecipeData/IngredientType';

interface IngredientItemsProps {
  ingredient: IngredientType;
}

export const IngredientsListItem: React.FC<IngredientItemsProps> = ({
  ingredient,
}: IngredientItemsProps) => {
  return (
    <div className="flex flex-row">
      <div className="w-24 px-8 ">{ingredient.amount}</div>
      <div className="w-20 px-4 ">{ingredient.units}</div>
      <div className="w-80 px-4 ">{ingredient.name}</div>
      <div className="w-auto px-4 ">nasypnik </div>
    </div>
  );
};
