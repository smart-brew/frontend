import { info } from 'console';
import React, { useState } from 'react';
import IngredientType from '../../../types/RecipeData/IngredientType';
import FormSection from './FormSection';

interface Props {
  show: boolean;
  setListOfIngredients: (ingredients: IngredientType[]) => void;
}

function getIndex(
  arrIngredients: IngredientType[],
  idToSearch: number
): number {
  return arrIngredients.findIndex((obj) => obj.id === idToSearch);
}

const unloadChoices = ['Fermentables', 'Yeast', 'Hops', 'Other']; // i can get these from the list of the supported functions

const IngredietsForm: React.FC<Props> = ({
  show,
  setListOfIngredients,
}: Props) => {
  const [inputFields, setInputFields] = useState([
    {
      amount: 0,
      units: 'KG',
      name: '',
      id: 0,
      type: 'Fermentables',
      recipe_id: 0,
    },
  ]);

  const generateid = (): number => {
    const values = [...inputFields];
    const max = Math.max(...values.map((o) => o.id), 0);
    return max + 1;
  };

  const [recipeName, setRecipeName] = useState('');

  const handleChangeInput = (
    ids: number,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const index = getIndex(inputFields, ids);
    const values = [...inputFields] as any;
    values[index][event.target.name as keyof IngredientType] =
      event.target.value;
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
      recipe_id: 0,
      type: sectionName,
    });
    setInputFields(values);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const values = [...inputFields] as IngredientType[];
    console.log(values);
    setListOfIngredients(values);
  };

  if (!show) {
    return null;
  }

  const result = inputFields?.reduce((r, a) => {
    r[a.type] = r[a.type] || [];
    r[a.type].push(a);
    return r;
  }, Object.create(null));

  const infoGroup = unloadChoices.map((item: string) => {
    return (
      <FormSection
        unloadChoices={unloadChoices}
        inputFields={result[item]}
        sectionName={item}
        handleAdd={handleAddFields}
        handleRemove={handleRemoveField}
        handleChange={handleChangeInput}
      />
    );
  });

  return (
    <div className="">
      <label htmlFor="name">
        <input
          type="text"
          className="w-80 px-8  border-2 border-gray-300 text-2xl font-bold m-10"
          name="name"
          placeholder="recipe name"
          value={recipeName}
          required
          onChange={(event) => setRecipeName(event.target.value)}
        />
      </label>
      <form onSubmit={handleSubmit} className="mx-20">
        <div className="container  border-2 border-gray-300 rounded-3xl  px-20 ">
          <header className="center py-8 font-bold">
            <h3>Ingredients</h3>
          </header>

          <div>{infoGroup}</div>
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mt-16 w-52"
            value="Submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default IngredietsForm;
