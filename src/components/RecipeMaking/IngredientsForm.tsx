import React, { useState } from 'react';
import IngredientType from '../../types/RecipeData/IngredientType';

const unloadChoices = ['Fermentables', 'Yeast', 'Hops', 'Other'];

const options = [
  { value: 'kg', label: 'KG' },
  { value: 'litre', label: 'l' },
  { value: 'oz', label: 'oz' },
];

// eslint-disable-next-line
const IngredietsForm = (props: any) => {
  const { show } = props;

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

  // eslint-disable-next-line
  const handleChangeInput = (
    index: number,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ): void => {
    const values = [...inputFields] as any;
    values[index][event.target.name as keyof IngredientType] =
      event.target.value;
    setInputFields(values);
    const values2 = [...inputFields] as any;
  };

  const handleRemoveField = (index: number): void => {
    const values = [...inputFields];
    values.splice(index, 1);
    setInputFields(values);
  };
  const handleAddFields = (index: number): void => {
    const values = [...inputFields];
    values.splice(index + 1, 0, {
      amount: 0,
      units: 'KG',
      name: '',
      id: generateid(),
      recipe_id: 0,
      type: 'Fermentables',
    });
    setInputFields(values);
  };

  // eslint-disable-next-line
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = [...inputFields] as IngredientType[];
    console.log(values);
  };

  if (!show) {
    return null;
  }

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="container  border-2 border-gray-300 rounded-3xl  px-20">
          <header className="center py-8 text-xl">
            <h3>Ingredients</h3>
          </header>

          {inputFields.map((inputField, index) => (
            <div className="flex flex-row ">
              <label htmlFor="amount">
                <input
                  className="w-24 px-4 border-2 border-gray-300 "
                  name="amount"
                  type="number"
                  value={inputFields[index].amount}
                  onChange={(event) => handleChangeInput(index, event)}
                />
              </label>
              <label htmlFor="units" className="px-1">
                <select
                  name="units"
                  className="w-20 px-4  border-2 border-gray-300 "
                  placeholder=" units"
                  value={inputFields[index].units}
                  onChange={(event) => handleChangeInput(index, event)}
                >
                  {options.map((e, key) => {
                    return <option value={e.value}>{e.label}</option>;
                  })}
                </select>
              </label>
              <label htmlFor="type" className="px-1">
                <select
                  name="type"
                  className="w-30 px-4  border-2 border-gray-300 "
                  placeholder=" type"
                  value={inputFields[index].type}
                  onChange={(event) => handleChangeInput(index, event)}
                >
                  {unloadChoices.map((e, key) => {
                    return <option value={e}>{e}</option>;
                  })}
                </select>
              </label>
              <label htmlFor="name">
                <input
                  type="text"
                  className="w-80 px-8  border-2 border-gray-300 "
                  name="name"
                  placeholder="ingredient"
                  value={inputFields[index].name}
                  required
                  onChange={(event) => handleChangeInput(index, event)}
                />
              </label>

              <button
                type="button"
                className="px-4"
                onClick={() => handleAddFields(index)}
              >
                &#43;
              </button>
              {index === 0 ? (
                <></>
              ) : (
                <button type="button" onClick={() => handleRemoveField(index)}>
                  &#8722;
                </button>
              )}
            </div>
          ))}

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
