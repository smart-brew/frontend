/* eslint-disable camelcase */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import EditableInstructionTemplateType from '../components/RecipeBuilding/InstructionComponents/EditableInstructionTemplateType';

import IngredietsForm from '../components/RecipeMaking/form/IngredientsForm';
import SplitPage from '../components/shared/SplitPage';
import CreateIngredientsSidebar from '../SideBars/CreateIngredientsSidebar';
import IngredientType from '../types/RecipeData/IngredientType';
import RecipeBlockType from '../types/RecipeData/RecipeBlockType';
import { RecipeDataProps } from './RecipeInstructionsPage';

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

  const [recipeNameForm, setRecipeNameForm] = React.useState(sendRecipeName);
  const [inputFields, setInputFields] =
    React.useState<IngredientType[]>(sendIngredients);

  const saveForm = (): void => {
    console.log('SAVE FORM INGREDIENTS');

    console.log(inputFields, sendBlocks);

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
