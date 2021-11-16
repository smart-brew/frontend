import { info } from 'console';
import React, { useState } from 'react';
import IngredientType from '../../../types/RecipeData/IngredientType';
import FormSection from './FormSection';

interface Props {
  show: boolean;
}

function getIndex(
  arrIngredients: IngredientType[],
  idToSearch: number
): number {
  return arrIngredients.findIndex((obj) => obj.id === idToSearch);
}

const unloadChoices = ['Fermentables', 'Yeast', 'Hops', 'Other']; // i can get these from the list of the supported functions

const IngredietsForm: React.FC<Props> = ({ show }: Props) => {
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
      <form onSubmit={handleSubmit}>
        <div className="container  border-2 border-gray-300 rounded-3xl  px-20">
          <header className="center py-8 text-xl">
            <h3>Ingredients</h3>
          </header>

          <div>{infoGroup}</div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
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
