import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import IngredietsForm from '../components/recipe/ingredient-form/IngredientsForm';
import SplitPage from '../components/shared/SplitPage';
import CreateIngredientsSidebar from '../components/sidebar/CreateIngredientsSidebar';
import IngredientType from '../types/RecipeData/IngredientType';
import RecipeBlockType from '../types/RecipeData/RecipeBlockType';
import { RecipeSimple } from '../types/RecipeData/RecipeType';
import { RecipeDataProps } from './RecipeInstructionsPage';
import { getRecipes } from '../api/recipe';

export interface IngredientsFormProps {
  ingredients: IngredientType[];
  recipeName: string;
  addBlocks: RecipeBlockType[];
}

const RecipeIngredientsPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { sendIngredients, sendRecipeName, sendBlocks } =
    location.state as RecipeDataProps;

  // all recipes known to system
  const [recipes, setRecipes] = React.useState<RecipeSimple[]>([]);
  const [nameError, setNameError] = React.useState<string>('');
  const [recipeNameForm, setRecipeNameForm] = React.useState(sendRecipeName);
  const [inputFields, setInputFields] =
    React.useState<IngredientType[]>(sendIngredients);

  React.useEffect(() => {
    getRecipes().then((allRecipes) => setRecipes(allRecipes));
  }, []);

  React.useEffect(() => {
    if (recipeNameForm.length < 3) {
      setNameError('choose the recipe name longer then 3 characters');
    }
  }, [recipeNameForm]);

  const validateNameInput = (name: string): void => {
    const searchTerm = name.toLowerCase();
    const matches = recipes.filter(
      (recipeItem) => recipeItem.name.toLowerCase() === searchTerm
    );
    if (!name) {
      setNameError('choose the recipe name');
    } else if (matches.length > 0) {
      setNameError('recipe with this name already exists');
    } else if (recipeNameForm) {
      setNameError('');
    }

    setRecipeNameForm(name);
  };

  const validateInputFields = (): boolean => {
    const field = inputFields.filter((inputItem) => inputItem.name === '');
    if (field.length > 0 || nameError !== '') {
      return false;
    }
    return true;
  };

  const saveForm = (): void => {
    console.log('SAVE FORM INGREDIENTS');

    console.log(inputFields, sendBlocks);

    // only let to leave the page if the recipe name was chosen or isnt duplicate
    if (nameError === '') {
      const data: IngredientsFormProps = {
        ingredients: inputFields,
        recipeName: recipeNameForm,
        addBlocks: sendBlocks ?? [],
      };
      history.push('/recipe/instructions', data);
    }
  };

  return (
    <SplitPage>
      <div>
        <IngredietsForm
          inputFields={inputFields}
          setInputFields={(newIngredients: IngredientType[]) =>
            setInputFields(newIngredients)
          }
          recipeNameForm={recipeNameForm}
          setRecipeNameForm={(name: string) => validateNameInput(name)}
          nameError={nameError}
        />
      </div>

      <CreateIngredientsSidebar
        saveForm={saveForm}
        validateInputFields={validateInputFields}
      />
    </SplitPage>
  );
};

export default RecipeIngredientsPage;
