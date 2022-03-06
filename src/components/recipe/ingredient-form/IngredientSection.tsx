import React from 'react';
import IngredientType from '../../../types/RecipeData/IngredientType';

interface FormSectionProps {
  inputFields: IngredientType[];
  sectionName: string;

  handleChange: (
    index: number,
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => void;
  handleRemove: (index: number) => void;
  handleAdd: (sectionName: string) => void;
}

const IngredientSection: React.FC<FormSectionProps> = ({
  inputFields,
  sectionName,
  handleAdd,
  handleChange,
  handleRemove,
}) => {
  const options = [
    { value: 'kg', label: 'KG' },
    { value: 'litre', label: 'l' },
    { value: 'oz', label: 'oz' },
  ];

  // const [nameError, setNameError] = React.useState<string>('');

  // const checkInput = (value: string): void => {
  //   if (!value) {
  //     console.log('nothing');
  //     setNameError('required');
  //   }
  // };

  if (!inputFields) {
    return (
      <div className="my-5">
        <div className="text-left font-bold flow-root">{sectionName}</div>
        <button
          type="button"
          className="px-4 text-base font-medium text-gray-500 text-left underline float-right"
          onClick={() => handleAdd(sectionName)}
        >
          &#43; Add ingredient
        </button>
      </div>
    );
  }

  return (
    <form className="my-5">
      <div className="text-left font-bold">{sectionName}</div>
      {inputFields.map((inputField) => (
        <div className="flex flex-row flow-root" key={inputField.id}>
          <label htmlFor="amount">
            <input
              className="w-24 px-4 shadow"
              name="amount"
              type="number"
              value={inputField.amount}
              onChange={(event) => handleChange(inputField.id, event)}
            />
          </label>
          <label htmlFor="units" className="px-1">
            <select
              name="units"
              className="w-20 px-4 shadow"
              placeholder=" units"
              value={inputField.units}
              onChange={(event) => handleChange(inputField.id, event)}
            >
              {options.map((e) => {
                return (
                  <option key={e.value} value={e.value}>
                    {e.label}
                  </option>
                );
              })}
            </select>
          </label>

          <label htmlFor="name">
            <input
              type="text"
              className="w-80 px-8 shadow
        "
              name="name"
              required
              id="name-input"
              placeholder="ingredient"
              value={inputField.name}
              onChange={(event) => {
                handleChange(inputField.id, event);
              }}
            />
            {/* <span
              className="msg text-red-700 text-2xl"
              style={{ color: 'visibility: visible' }}
            >
              &#10033;
            </span>
            <p className="mt-2 visible peer-valid:visible text-pink-600 text-sm">
              Please provide a valid email address.
            </p> */}
          </label>

          <button
            type="button"
            className="px-4 text-base font-medium text-gray-500 underline float-right"
            onClick={() => handleAdd(sectionName)}
          >
            &#43; Add ingredient
          </button>

          <button
            type="button"
            className="float-right"
            onClick={() => handleRemove(inputField.id)}
          >
            &#8722;
          </button>
        </div>
      ))}
    </form>
  );
};

export default IngredientSection;
