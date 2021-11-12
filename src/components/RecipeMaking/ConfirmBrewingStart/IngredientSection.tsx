import React from 'react';
import IngredientSectionProps from '../../../types/PropsD/IngredientSectionProps';
import { IngredientsListItem } from './IngredientsListItem';

export const IngredientSection: React.FC<IngredientSectionProps> = (props) => {
  const { sectionName, ingredients } = props;

  return (
    <div className="">
      <div className="flex flex-row">{sectionName}</div>
      {ingredients.map((ingr, index) => {
        return <IngredientsListItem ingredient={ingr} />;
      })}
    </div>
  );
};
