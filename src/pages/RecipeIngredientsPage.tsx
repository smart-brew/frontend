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
  const [fieldError, setFieldError] = React.useState<string>('');
  const [recipeNameForm, setRecipeNameForm] = React.useState(sendRecipeName);
  const [inputFields, setInputFields] =
    React.useState<IngredientType[]>(sendIngredients);

  React.useEffect(() => {
    const f = async (): Promise<void> => {
      setRecipes(await getRecipes());
    };
    f();
    if (recipeNameForm === '') {
      setNameError('choose the recipe name');
    }
  }, []);

  const validateNameInput = (name: string): void => {
    const searchTerm = name.toLowerCase();
    console.log(name);
    const matches = recipes.filter(
      (obj) => obj.name.toLowerCase() === searchTerm
    );
    if (!name) {
      setNameError('choose the recipe name');
    } else if (matches.length > 0) {
      setNameError('recipe with this name already exists');
    } else if (recipeNameForm) {
      setNameError('');
    }

    setRecipeNameForm(name);

    console.log(recipes, name, recipeNameForm);
  };

  const validateInputFields = (): boolean => {
    const field = inputFields.filter((obj) => obj.name === '');
    console.log(field);
    if (field.length > 0) {
      setFieldError('some input fields stayed empty');
      return false;
    }
    return true;
  };

  const saveForm = (): void => {
    console.log('SAVE FORM INGREDIENTS');

    console.log(inputFields, sendBlocks);

    // only let to leave the page if the recipe name was chosen or isnt duplicate
    if (nameError === '' && validateInputFields()) {
      if (sendBlocks == null) {
        // if no instructions were made beforehand
        const emptyBlock: RecipeBlockType[] = [];

        const data: IngredientsFormProps = {
          ingredients: inputFields,
          recipeName: recipeNameForm,
          addBlocks: emptyBlock,
        };
        history.push('/recipe/instructions', data);
      } else {
        // if some instructions were made beforehand
        const data: IngredientsFormProps = {
          ingredients: inputFields,
          recipeName: recipeNameForm,
          addBlocks: sendBlocks,
        };
        history.push('/recipe/instructions', data);
      }
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
        {/* <p className="invalid-feedback">{fieldError}</p> */}
      </div>

      <CreateIngredientsSidebar saveForm={saveForm} />
    </SplitPage>
  );
};

export default RecipeIngredientsPage;
