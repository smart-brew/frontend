/* eslint-disable camelcase */
import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import EditableInstructionTemplateType from '../components/RecipeBuilding/InstructionComponents/EditableInstructionTemplateType';

import IngredietsForm from '../components/RecipeMaking/form/IngredientsForm';
import SplitPage from '../components/shared/SplitPage';
import CreateIngredientsSidebar from '../SideBars/CreateIngredientsSidebar';
import IngredientType from '../types/RecipeData/IngredientType';
import { RecipeDataProps } from './RecipeInstructionsPage';

export interface IngredientsFormProps {
  ingredients: IngredientType[];
  recipeName: string;
  addInstructions: EditableInstructionTemplateType[];
}

const RecipeIngredientsPage: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { sendIngredients, sendRecipeName, sendInstructions } =
    location.state as RecipeDataProps;

  const [recipeNameForm, setRecipeNameForm] = React.useState(sendRecipeName);
  const [inputFields, setInputFields] =
    React.useState<IngredientType[]>(sendIngredients);

  const saveForm = (): void => {
    console.log('SAVE FORM INGREDIENTS');

    console.log(inputFields, sendInstructions);

    if (sendInstructions == null) {
      const emptyInstr: EditableInstructionTemplateType[] = [
        {
          id: -1,
          blockId: -1,
          blockName: '',
          codeName: 'EMPTY',
          name: 'Empty instruction',
          category: 'EMPTY',
          units: null,
          inputType: 'string',
          description: 'This instruction is a placeholder.',
          param: null,
          device: null,
          ordering: -1,
        },
      ];
      const data: IngredientsFormProps = {
        ingredients: inputFields,
        recipeName: recipeNameForm,
        addInstructions: emptyInstr,
      };
      history.push('/recipe/instructions', data);
    } else {
      const data: IngredientsFormProps = {
        ingredients: inputFields,
        recipeName: recipeNameForm,
        addInstructions: sendInstructions,
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
