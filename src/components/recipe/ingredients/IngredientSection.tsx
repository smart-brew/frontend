import React from 'react';
import IngredientType from '../../../types/RecipeData/IngredientType';
import { IngredientsListItem } from './IngredientsListItem';

interface IngredientSectionProps {
  sectionName: string;
  ingredients: IngredientType[];
  showUnloader: boolean;
}

export const IngredientSection: React.FC<IngredientSectionProps> = ({
  sectionName,
  ingredients,
  showUnloader,
}: IngredientSectionProps) => {
  return (
    <ul className="py-3">
      <div className="flex flex-row font-bold py-1 text-xl">{sectionName}</div>
      {ingredients.map((ingr) => {
        return (
          <IngredientsListItem
            key={ingr.id}
            ingredient={ingr}
            showUnloader={showUnloader}
          />
        );
      })}
    </ul>
  );
};
