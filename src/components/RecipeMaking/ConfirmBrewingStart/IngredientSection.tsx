import React from 'react';
import IngredientType from '../../../types/RecipeData/IngredientType';
import { IngredientsListItem } from './IngredientsListItem';

interface IngredientSectionProps {
  sectionName: string;
  ingredients: IngredientType[];
}

export const IngredientSection: React.FC<IngredientSectionProps> = ({
  sectionName,
  ingredients,
}: IngredientSectionProps) => {
  return (
    <div className="">
      <div className="flex flex-row">{sectionName}</div>
      {ingredients.map((ingr) => {
        return <IngredientsListItem key={ingr.id} ingredient={ingr} />;
      })}
    </div>
  );
};
