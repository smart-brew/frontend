import React from 'react';
import IngredientType from '../../../types/RecipeData/IngredientType';
import IngredientSection from './IngredientSection';

interface Props {
  inputFields: Array<IngredientType>;
  setInputFields: (ingredients: IngredientType[]) => void;
  recipeNameForm: string;
  setRecipeNameForm: (name: string) => void;
  nameError: string;
}

function getIndex(
  arrIngredients: IngredientType[],
  idToSearch: number
): number {
  return arrIngredients.findIndex((obj) => obj.id === idToSearch);
}

const ingredientTypes = ['Fermentables', 'Yeast', 'Hops', 'Other']; // i can get these from the list of the supported functions

const IngredietsForm: React.FC<Props> = ({
  inputFields,
  setInputFields,
  recipeNameForm,
  setRecipeNameForm,
  nameError,
}: Props) => {
  const generateid = (): number => {
    const values = inputFields;
    const max = Math.max(...values.map((o) => o.id), 0);
    return max + 1;
  };

  const handleChangeInput = (
    id: number,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const index = getIndex(inputFields, id);
    const values = [...inputFields];

    if (event.target.name === 'amount') {
      if (event.target.value)
        values[index].amount = parseFloat(event.target.value);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      else values[index].amount = '';
    } else if (event.target.name === 'name') {
      values[index].name = event.target.value;
    } else if (event.target.name === 'units') {
      values[index].units = event.target.value;
    }

    setInputFields(values);
  };

  const handleRemoveField = (ids: number): void => {
    const index = getIndex(inputFields, ids);
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  const handleAddFields = (sectionName: string): void => {
    const values = [...inputFields];
    values.push({
      amount: 0,
      units: 'KG',
      name: '',
      id: generateid(),
      recipeId: 0,
      type: sectionName,
    });
    setInputFields(values);
  };

  const result = inputFields?.reduce((r, a) => {
    r[a.type] = r[a.type] || [];
    r[a.type].push(a);
    return r;
  }, Object.create(null));

  return (
    <>
      <label htmlFor="name">
        <div className="mt-7 mb-10">
          <input
            type="text"
            className="w-1/3 px-8 border border-gray-300 text-2xl font-bold mx-10 my-3 rounded-2xl p-3"
            name="name"
            placeholder="Recipe name"
            value={recipeNameForm}
            required
            onChange={(event) => setRecipeNameForm(event.target.value)}
          />
          <div className="invalid-feedback text-red-700 text-lg">
            {nameError}
          </div>
        </div>
      </label>
      <div className="mx-20">
        <div className="container border border-gray-300 rounded-3xl px-20">
          <header className="center py-8 font-bold text-2xl">
            <h3>Ingredients</h3>
          </header>

          <div className="mb-10">
            {ingredientTypes.map((type) => (
              <IngredientSection
                key={type}
                inputFields={result[type]}
                sectionName={type}
                handleAdd={handleAddFields}
                handleRemove={handleRemoveField}
                handleChange={handleChangeInput}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default IngredietsForm;
