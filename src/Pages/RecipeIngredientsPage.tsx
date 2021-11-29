/* eslint-disable camelcase */
import React from 'react';
import { useHistory } from 'react-router-dom';

import IngredietsForm from '../components/RecipeMaking/form/IngredientsForm';
import SplitPage from '../components/shared/SplitPage';
import CreateIngredientsSidebar from '../SideBars/CreateIngredientsSidebar';
import IngredientType from '../types/RecipeData/IngredientType';

export interface IngredientsFormProps {
  ingredients: IngredientType[];
  recipeName: string;
}

const RecipeIngredientsPage: React.FC = () => {
  const history = useHistory();

  const [recipeNameForm, setRecipeNameForm] = React.useState('');
  const [inputFields, setInputFields] = React.useState([
    {
      amount: 0,
      units: 'KG',
      name: '',
      id: 0,
      type: 'Fermentables',
      recipe_id: 0,
    },
  ]);

  const saveForm = (): void => {
    console.log('SAVE FORM INGREDIENTS');

    console.log(inputFields);

    const data: IngredientsFormProps = {
      ingredients: inputFields,
      recipeName: recipeNameForm,
    };

    history.push('/recipe/instructions', data);
  };

  return (
    <SplitPage>
      <IngredietsForm
        inputFields={inputFields}
        setInputFields={(newIngredients: IngredientType[]) =>
          setInputFields(newIngredients)
        }
        recipeNameForm={recipeNameForm}
        setRecipeNameForm={(name: string) => setRecipeNameForm(name)}
      />

      <CreateIngredientsSidebar saveForm={saveForm} />
    </SplitPage>
  );
};

export default RecipeIngredientsPage;
